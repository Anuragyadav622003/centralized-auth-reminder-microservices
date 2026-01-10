// src/shared/mongodb.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { MongoClient, Db, Collection, Document, MongoClientOptions, ClientSession } from 'mongodb';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoDBService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(MongoDBService.name);
  private client: MongoClient | null = null;
  private db: Db | null = null;
  private isInitialized = false;

  constructor(private readonly configService: ConfigService) {}

  async onModuleInit(): Promise<void> {
    await this.connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.disconnect();
  }

  private async connect(): Promise<void> {
    const uri = this.configService.get<string>('MONGODB_URI');
    const dbName = this.configService.get<string>('MONGODB_DB_NAME', 'reminder_db');

    if (!uri) {
      this.logger.error('MONGODB_URI environment variable is not set');
      throw new Error('MONGODB_URI environment variable is not set');
    }

    const options: MongoClientOptions = {
      maxPoolSize: this.configService.get<number>('MONGODB_MAX_POOL_SIZE', 10),
      minPoolSize: this.configService.get<number>('MONGODB_MIN_POOL_SIZE', 2),
      connectTimeoutMS: this.configService.get<number>('MONGODB_CONNECT_TIMEOUT', 10000),
      socketTimeoutMS: this.configService.get<number>('MONGODB_SOCKET_TIMEOUT', 45000),
      serverSelectionTimeoutMS: 5000,
      retryWrites: true,
      retryReads: true,
      directConnection: uri.includes('localhost') || uri.includes('127.0.0.1'),
    };

    this.logger.log(`Connecting to MongoDB at ${this.maskPassword(uri)}...`);

    try {
      this.client = new MongoClient(uri, options);
      await this.client.connect();

      // Test connection
      await this.client.db('admin').command({ ping: 1 });

      // Use application database
      this.db = this.client.db(dbName);

      // Optional: create app user if needed
      await this.setupApplicationUser();

      this.isInitialized = true;
      this.logger.log(`✅ Connected to MongoDB database: ${dbName}`);

      this.setupEventListeners();
    } catch (error: any) {
      this.logger.error(`❌ Failed to connect to MongoDB: ${error.message}`);
      throw error;
    }
  }

  private maskPassword(uri: string): string {
    return uri.replace(/:\/\/[^:]+:[^@]+@/, '://***:***@');
  }

  private async setupApplicationUser(): Promise<void> {
    if (!this.client) return;

    try {
      const dbName = this.configService.get<string>('MONGODB_DB_NAME', 'reminder_db');
      const adminDb = this.client.db('admin');

      const users = await adminDb.command({ usersInfo: 1 });
      const appUserExists = users.users.some((user: any) => user.user === 'reminder_app_user');

      if (!appUserExists) {
        this.logger.log('Creating application-specific MongoDB user...');
        await adminDb.command({
          createUser: 'reminder_app_user',
          pwd: 'app_password_123', // Change this in production!
          roles: [
            { role: 'readWrite', db: dbName },
            { role: 'read', db: 'admin' },
          ],
        });
        this.logger.log('✅ Application user created');
      }
    } catch (error: any) {
      this.logger.warn('Could not create application user (might not have permissions):', error.message);
    }
  }

  private setupEventListeners(): void {
    if (!this.client) return;

    this.client.on('connectionPoolCreated', () => this.logger.debug('MongoDB connection pool created'));
    this.client.on('connectionPoolReady', () => this.logger.debug('MongoDB connection pool ready'));
    this.client.on('connectionPoolClosed', () => this.logger.warn('MongoDB connection pool closed'));
    this.client.on('connectionCreated', () => this.logger.debug('New MongoDB connection created'));
    this.client.on('connectionClosed', () => this.logger.debug('MongoDB connection closed'));
  }

  private async disconnect(): Promise<void> {
    if (!this.client) return;

    try {
      await this.client.close(true); // force close all connections
      this.logger.log('🔌 MongoDB connection closed');
    } catch (error: any) {
      this.logger.error('Error closing MongoDB connection:', error.message);
    } finally {
      this.client = null;
      this.db = null;
      this.isInitialized = false;
    }
  }

  getCollection<T extends Document>(collectionName: string): Collection<T> {
    if (!this.db) throw new Error('Database not initialized');
    return this.db.collection<T>(collectionName);
  }

  getDb(): Db {
    if (!this.db) throw new Error('Database not initialized');
    return this.db;
  }

  async healthCheck(): Promise<{ status: string; latency: number; details?: any }> {
    if (!this.db) return { status: 'disconnected', latency: -1 };

    const start = Date.now();
    try {
      await this.db.command({ ping: 1 });
      const latency = Date.now() - start;
      const stats = await this.db.command({ dbStats: 1, scale: 1 });
      return {
        status: 'healthy',
        latency,
        details: {
          db: stats.db,
          collections: stats.collections,
          objects: stats.objects,
          storageSize: this.formatBytes(stats.storageSize),
          uptime: stats.uptime,
        },
      };
    } catch (error: any) {
      return { status: 'unhealthy', latency: -1, details: { error: error.message } };
    }
  }

  private formatBytes(bytes: number): string {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    return `${size.toFixed(2)} ${units[unitIndex]}`;
  }

  async createIndexes(): Promise<void> {
    if (!this.db) return;
    try {
      const reminders = this.getCollection('reminders');
      await reminders.createIndexes([
        { key: { userId: 1, dueDate: 1 }, name: 'user_due_date_idx' },
        { key: { status: 1 }, name: 'status_idx' },
        { key: { createdAt: -1 }, name: 'created_at_desc_idx' },
        { key: { tags: 1 }, name: 'tags_idx' },
      ]);
      this.logger.log('✅ MongoDB indexes created/verified');
    } catch (error: any) {
      this.logger.warn('Could not create indexes:', error.message);
    }
  }

  async createTextIndex(collectionName: string, fields: string[]): Promise<string> {
    const collection = this.getCollection(collectionName);
    const indexSpec: Record<string, 'text'> = {};
    fields.forEach((f) => (indexSpec[f] = 'text'));
    return collection.createIndex(indexSpec, {
      name: `${collectionName}_text_search`,
      weights: fields.reduce((acc, f, idx) => ({ ...acc, [f]: fields.length - idx }), {}),
    });
  }

  async withTransaction<T>(operation: (session: ClientSession) => Promise<T>): Promise<T> {
    if (!this.client) throw new Error('MongoDB client not initialized');

    const session = this.client.startSession();
    try {
      let result: T;
      await session.withTransaction(async () => {
        result = await operation(session);
      });
      return result!;
    } catch (error: any) {
      this.logger.error('Transaction failed:', error.message);
      throw error;
    } finally {
      await session.endSession();
    }
  }

  async backup(): Promise<Buffer> {
    if (!this.db) throw new Error('Database not initialized');

    const collections = await this.db.listCollections().toArray();
    const backupData: Record<string, any[]> = {};

    for (const col of collections) {
      const collection = this.db.collection(col.name);
      backupData[col.name] = await collection.find().toArray();
    }

    return Buffer.from(JSON.stringify(backupData, null, 2));
  }

  async waitForConnection(timeout = 30000): Promise<void> {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      if (await this.isConnected()) return;
      await new Promise((res) => setTimeout(res, 1000));
    }
    throw new Error(`MongoDB not ready after ${timeout}ms`);
  }

  async isConnected(): Promise<boolean> {
    if (!this.db) return false;
    try {
      await this.db.command({ ping: 1 });
      return true;
    } catch {
      return false;
    }
  }
}
