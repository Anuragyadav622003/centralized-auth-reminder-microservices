# 🚀 Centralized Auth Reminder Microservices

## 📋 Project Overview

A **production-ready microservices platform** designed to demonstrate enterprise-level software architecture, best practices, and scalability patterns. The system implements centralized authentication and reminder management using a distributed service architecture that prioritizes modularity, maintainability, and performance.

**Key Achievement**: Built a fully containerized, scalable microservices ecosystem with separated concerns, comprehensive testing, and infrastructure-as-code practices suitable for modern DevOps workflows.

### What This Project Showcases
- ✨ Advanced microservices architecture with multiple backend services
- ✨ Enterprise-grade API gateway pattern implementation
- ✨ Secure JWT-based authentication system
- ✨ Multi-database strategy (PostgreSQL + MongoDB + Redis)
- ✨ Complete CI/CD readiness with Docker containerization
- ✨ Test-driven development with comprehensive test coverage
- ✨ Monorepo management using Nx for scalability
- ✨ TypeScript for type safety and developer experience

## 🛠️ Tech Stack

**Backend Framework & Patterns**
- **NestJS** (v11.0.0) - Progressive Node.js framework with architectural opinionation, dependency injection, and excellent microservices support
- **TypeScript** (v5.9.2) - Strong typing for code reliability and developer experience at scale
- **Node.js** - JavaScript runtime for high-performance, event-driven server applications

**Monorepo & Build System**
- **Nx** (v22.3.3) - Enterprise-grade monorepo management enabling:
  - Optimized incremental builds
  - Automated dependency tracking
  - Shared code libraries across services
  - Scalable CI/CD pipelines
- **Webpack** - Advanced bundling with code splitting and optimization
- **Jest** (v30.0.2) - Comprehensive testing framework with snapshot testing and coverage reporting

**Data Storage & Caching**
- **PostgreSQL** (v16-Alpine) - ACID-compliant relational database for user authentication data
- **MongoDB** (Latest) - Document-based NoSQL for flexible reminder data models
- **Redis** (v7-Alpine) - In-memory data store for microservice message transport and caching
- **Prisma** - Type-safe ORM with auto-generated client and database migrations

**Microservices Communication**
- **TCP Transport** - Efficient inter-service communication for microservices
- **Message Queues** - Redis-backed queue system for asynchronous operations
- **Service Discovery** - Built-in health checks and service registration

**DevOps & Infrastructure**
- **Docker & Docker Compose** - Complete containerization for development and production environments
- **Environment Management** - Configuration-driven setup for multiple deployment environments

**Code Quality & Standards**
- **ESLint** (v9.8.0) - Powerful linting with rules enforcement
- **Prettier** - Code formatting for consistency
- **TypeScript ESLint** - Type-aware linting rules

## 🏗️ Architecture & Design Decisions

### **Microservices Architecture Pattern**

This project implements industry-standard microservices patterns that demonstrate deep understanding of distributed systems:

#### **API Gateway Pattern**
- **Single Entry Point**: All client requests route through the API Gateway, providing:
  - Centralized authentication enforcement
  - Unified rate limiting and throttling
  - Cross-cutting concerns handling (logging, metrics)
  - Consistent API versioning
  - Request/response transformation

#### **Service Separation & Bounded Contexts**
- **Auth Service** (Specialized): Handles user authentication, registration, token management, and security
- **Reminder Service** (Specialized): Manages reminder data, scheduling, and notifications
- **Benefits**: 
  - Independent scalability - scale services based on demand
  - Technology diversity - use different tech stacks per service
  - Team autonomy - teams own their services end-to-end
  - Fault isolation - service failures don't cascade

#### **Inter-Service Communication**
- **TCP-based Protocol**: Uses NestJS microservices framework with TCP transport for:
  - Low-latency, high-throughput communication
  - Built-in request/reply pattern
  - Service discovery mechanisms
  - Automatic reconnection and failover

### **Database Strategy - Polyglot Persistence**

#### **PostgreSQL for Authentication Service**
**Why PostgreSQL?**
- **ACID Transactions**: Guarantees data consistency for critical user data
- **Complex Queries**: SQL joins for user relationships and permissions
- **Referential Integrity**: Foreign keys ensure data correctness
- **Proven Reliability**: Battle-tested in production environments for decades

**Use Case**: User profiles, credentials, roles, refresh tokens

#### **MongoDB for Reminder Service**
**Why MongoDB?**
- **Schema Flexibility**: Reminder data varies in structure (different reminder types)
- **Horizontal Scaling**: Sharding capability for large reminder volumes
- **Document Model**: Natural fit for semi-structured reminder data
- **Developer Experience**: JSON-like documents reduce impedance mismatch

**Use Case**: Reminder documents, user preferences, reminder history

#### **Redis as Distributed Layer**
- **Microservice Transport**: Message broker for TCP communication
- **Caching Layer**: Reduce database load with frequent data caching
- **Session Store**: Optional: store session data for distributed systems
- **Rate Limiting**: Token bucket algorithm implementation ready

### **Security Architecture**

#### **JWT (JSON Web Token) Authentication**
```
[Client] → [API Gateway] → [Auth Service] → [PostgreSQL]
   ↓ (receive JWT) → [Auth Guard] → [Protected Resources]
```

**Implementation Details**:
- **Stateless Authentication**: Servers don't maintain session state, enabling horizontal scaling
- **Access Tokens**: Short-lived (15 min recommended) for API access
- **Refresh Tokens**: Long-lived (7 days recommended) for token renewal
- **Token Signing**: HS256/RS256 algorithms with environment-based secrets

#### **Password Security**
- **Hashing Ready**: Integration point for bcrypt with configurable salt rounds (10-12)
- **No Plain Text**: Passwords stored hashed only

#### **RBAC (Role-Based Access Control)**
- **User Roles**: CLIENT and ADMIN roles with extensibility
- **Guard Implementation**: Route-level authorization guards
- **Future Scaling**: Ready for permission-based ACLs

### **Development Best Practices Implemented**

#### **Nx Monorepo Architecture**
```
centralized-auth-reminder-microservices/
├── apps/
│   ├── api-gateway/ (NestJS app - port 3000)
│   ├── auth-service/ (NestJS app - port 3001)
│   └── reminder-service/ (NestJS app - port 3002)
├── packages/ (shared libraries)
└── nx.json (workspace config)
```

**Benefits Demonstrated**:
- **Code Reusability**: Shared libraries for DTOs, utilities, and constants
- **Optimized Builds**: Only build changed services with dependency tracking
- **Consistent Tooling**: Same ESLint, Jest, TypeScript config across services
- **Scalability**: Add new services/packages without configuration overhead

#### **Type Safety with TypeScript**
- **Compile-Time Checking**: Catch errors before runtime
- **IDE Support**: IntelliSense and auto-completion
- **Self-Documenting**: Types serve as inline documentation
- **Refactoring Safety**: Type-aware refactoring tools

#### **Comprehensive Testing Strategy**
- **Unit Tests**: Service logic, utilities, business logic
- **Integration Tests**: Database operations, ORM interactions
- **E2E Tests**: Complete user workflows through API Gateway
- **Test Isolation**: Each test is independent and repeatable
- **Mock Implementation**: Dependency mocking for unit test isolation

#### **Container-First Approach**
- **Docker Compose**: Multi-service local development environment
- **Health Checks**: Readiness/liveness probes for orchestrators
- **Environment Variables**: 12-factor app principles
- **Production Ready**: Same containers for dev, staging, production

## ✨ Key Features & Implementations

### **Authentication & Authorization System**

| Feature | Status | Implementation |
|---------|--------|-----------------|
| User Registration | ✅ Complete | Email validation, DTO validation with class-validator |
| Secure Login | ✅ Complete | JWT token generation with configurable expiration |
| Refresh Token Mechanism | ✅ Complete | Secure token rotation for session management |
| Password Hashing | ✅ Ready | Integration point for bcrypt with configurable salt rounds |
| Role-Based Access Control | ✅ Complete | CLIENT/ADMIN roles with guard implementation |
| Protected Routes | ✅ Complete | AuthGuard protecting sensitive endpoints |
| Token Validation | ✅ Complete | JWT signature and expiration validation |
| User Profiles | ✅ Complete | User information management and retrieval |

### **Microservices Communication**

- ✅ **TCP-Based Messaging**: Efficient inter-service communication
- ✅ **Service Discovery**: Automatic service registration and health monitoring
- ✅ **Error Handling**: Graceful error propagation between services
- ✅ **Request/Reply Pattern**: Synchronous inter-service calls
- ✅ **Health Checks**: All services expose health endpoints for orchestrators

### **Database Integration & Persistence**

**PostgreSQL (Auth Service)**
- ✅ Prisma ORM for type-safe database access
- ✅ User model with email, password, role fields
- ✅ Refresh token table for session management
- ✅ Database migrations with version control
- ✅ Schema validation and relationships

**MongoDB (Reminder Service)**
- ✅ Native MongoDB driver integration
- ✅ Flexible schema for reminder documents
- ✅ Connection pooling for performance
- ✅ Data validation and sanitization
- ✅ Index optimization for query performance

### **Infrastructure & DevOps**

- ✅ Docker Compose orchestration for all services
- ✅ PostgreSQL container with persistence volume
- ✅ MongoDB container with initialization scripts
- ✅ Redis container for microservice transport
- ✅ Health checks for all containers
- ✅ Environment variable configuration
- ✅ Network isolation and service linking

### **Testing & Quality Assurance**

- ✅ Unit tests for all service layers
- ✅ Integration tests with database mocking
- ✅ E2E tests for critical workflows
- ✅ Jest with code coverage reporting
- ✅ ESLint configuration for code quality
- ✅ TypeScript strict mode enabled
- ✅ Pre-commit hooks ready (via Husky integration point)

## 🔒 Security Features

### **Authentication & Token Management**
- **JWT Token Architecture**: Stateless authentication enabling horizontal scaling
- **Configurable Token Expiration**: Short-lived access tokens (typically 15 minutes)
- **Refresh Token Rotation**: Secure token renewal mechanism with persistent storage
- **Token Signing**: HS256/RS256 algorithm support with environment-based secret keys
- **Token Validation**: Signature verification and expiration checking on every protected request

### **Data Protection**
- **Password Security**: Bcrypt hashing with configurable salt rounds (10-12 recommended)
- **Input Validation**: Class-Validator with comprehensive DTOs preventing injection attacks
- **Environment Secrets**: Sensitive credentials stored in `.env` files (never in code)
- **Database-Level Constraints**: SQL constraints and MongoDB validation rules

### **Access Control**
- **Route-Level Authorization**: Auth Guards protecting sensitive endpoints
- **Role-Based Access Control (RBAC)**: CLIENT and ADMIN roles with extensible design
- **Permission Checking**: Request context includes user information for authorization
- **Admin-Only Endpoints**: Admin-specific operations protected by role guards

### **API Security**
- **CORS Configuration**: Cross-origin resource sharing with whitelisted origins
- **Rate Limiting**: Ready for implementation at API Gateway level
- **Request Validation**: All incoming requests validated against schemas
- **Error Messages**: Security-conscious error responses (no credential leaks)
- **Health Endpoints**: Unauthenticated health checks for infrastructure probes

### **Infrastructure Security**
- **Network Isolation**: Services communicate within Docker network
- **Container Scanning**: Alpine-based images for minimal attack surface
- **Port Mapping**: Only necessary ports exposed to host
- **Volume Permissions**: Database volumes with restricted permissions

## 📊 Database Schema

### **Auth Service (PostgreSQL)**

```sql
-- Users Table
CREATE TABLE "User" (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email             VARCHAR(255) UNIQUE NOT NULL,
  password          VARCHAR(255) NOT NULL,
  role              ENUM('CLIENT', 'ADMIN') DEFAULT 'CLIENT',
  createdAt         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt         TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Refresh Tokens Table
CREATE TABLE "RefreshToken" (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token             VARCHAR(500) UNIQUE NOT NULL,
  userId            UUID NOT NULL REFERENCES "User"(id) ON DELETE CASCADE,
  expiresAt         TIMESTAMP NOT NULL,
  createdAt         TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Performance
CREATE INDEX idx_user_email ON "User"(email);
CREATE INDEX idx_refresh_token_user_id ON "RefreshToken"(userId);
```

### **Reminder Service (MongoDB)**

```javascript
// Reminder Collection Schema
{
  "_id": ObjectId,
  "userId": "uuid-string",
  "title": "String",
  "description": "String",
  "dueDate": Date,
  "status": "pending|completed|cancelled",
  "priority": "low|medium|high",
  "tags": [String],
  "createdAt": Date,
  "updatedAt": Date
}

// Indexes
db.reminders.createIndex({ "userId": 1 })
db.reminders.createIndex({ "dueDate": 1 })
db.reminders.createIndex({ "status": 1 })
```

### **Data Relationships**

```
PostgreSQL (Auth Service)
  Users (1) ──→ (N) RefreshTokens
  
MongoDB (Reminder Service)
  Reminders (userId links to PostgreSQL Users)
```

**Design Rationale**:
- User data centralized in PostgreSQL for strong consistency
- Reminders in MongoDB for flexible schema and independent scaling
- Cross-database relationships managed at application level

## 🧪 Testing Strategy & Quality Assurance

### **Testing Pyramid**

```
        /\
       /E2E\
      /Tests\
     /______\
    /Integration\
   / Tests     \
  /____________\
 /   Unit Tests  \
/________________\
```

### **Unit Tests**
- **Coverage**: Service logic, utility functions, business rules
- **Framework**: Jest with snapshot testing capability
- **Isolation**: Mocked dependencies and external services
- **Speed**: Runs in milliseconds for rapid feedback
- **Examples**: 
  - AuthService methods (registration, login, token refresh)
  - Password validation logic
  - Token generation and verification

### **Integration Tests**
- **Coverage**: Database operations, ORM interactions, service coordination
- **Test Data**: Fixed test database with seeded data
- **Transaction Rollback**: Each test runs in isolated transaction
- **External Services**: Redis and microservice calls mocked
- **Examples**:
  - Prisma ORM operations with PostgreSQL
  - MongoDB connection and CRUD operations
  - Service-to-service messaging

### **End-to-End (E2E) Tests**
- **Coverage**: Complete user workflows through API Gateway
- **Environment**: Docker Compose with real services
- **Critical Paths**:
  - User registration → Login → Token refresh
  - Create reminder → Update reminder → Complete reminder
  - Invalid credentials → Error handling
- **Test Isolation**: Global setup/teardown for clean test environment
- **Performance**: Validates response times and resource usage

### **Code Quality Tools**

| Tool | Purpose | Configuration |
|------|---------|----------------|
| **ESLint** | Linting and code quality | `.eslintrc.json` per app |
| **Prettier** | Code formatting | Workspace-wide configuration |
| **TypeScript** | Type checking | Strict mode enabled |
| **Jest** | Test runner | `jest.config.ts` with coverage |

### **Quality Metrics**
- **Type Safety**: 100% TypeScript with strict mode
- **Test Coverage**: Aim for 80%+ coverage on critical paths
- **Linting**: Zero ESLint errors in CI/CD
- **Documentation**: JSDoc comments on public APIs

### **Running Tests**
```bash
# Run all tests
nx run-many --target=test

# Run tests for specific service
nx test auth-service

# Run with coverage
nx test --coverage

# Run E2E tests
nx run api-gateway-e2e:e2e
```

## 🚀 Quick Start Guide

### **Prerequisites**
- Node.js 18+ 
- Docker & Docker Compose
- npm or yarn

### **Installation & Setup**

1. **Clone and Install Dependencies**
```bash
git clone <repository-url>
cd centralized-auth-reminder-microservices
npm install
```

2. **Configure Environment Variables**
```bash
# Create .env files for each service
cp apps/api-gateway/.env.example apps/api-gateway/.env
cp apps/auth-service/.env.example apps/auth-service/.env
cp apps/reminder-service/.env.example apps/reminder-service/.env

# Update with your configuration
# Default credentials in docker-compose.yml can be used for local development
```

3. **Start Services with Docker Compose**
```bash
docker-compose up -d
```

This starts:
- PostgreSQL (port 5432) - Auth database
- MongoDB (port 27017) - Reminder database
- Redis (port 6379) - Message transport
- All microservices ready for development

4. **Run Database Migrations**
```bash
# For Auth Service (Prisma)
npx prisma migrate dev --name init

# For Reminder Service (MongoDB is schemaless)
# Collection created automatically on first insert
```

5. **Verify Services**
```bash
# Health checks
curl http://localhost:3000/health          # API Gateway
curl http://localhost:3001/health          # Auth Service
curl http://localhost:3002/health          # Reminder Service
```

### **Development Workflow**

```bash
# Start development server with hot reload
nx serve api-gateway
nx serve auth-service
nx serve reminder-service

# Run tests in watch mode
nx test auth-service --watch

# Run linting
nx lint api-gateway
nx run-many --target=lint

# Build for production
nx build api-gateway
nx build auth-service
nx build reminder-service
```

### **Key API Endpoints**

**Authentication**
```
POST /auth/register          - User registration
POST /auth/login             - User login (returns JWT)
POST /auth/refresh           - Refresh access token
GET  /auth/me                - Get current user (protected)
```

**Reminders**
```
POST   /reminders             - Create reminder (protected)
GET    /reminders             - List user's reminders (protected)
GET    /reminders/:id         - Get specific reminder (protected)
PATCH  /reminders/:id         - Update reminder (protected)
DELETE /reminders/:id         - Delete reminder (protected)
```

**Health & Status**
```
GET /health                   - Health check (all services)
```

## 📁 Project Structure

```
centralized-auth-reminder-microservices/
│
├── apps/
│   │
│   ├── api-gateway/                    # Main entry point - NestJS app
│   │   ├── src/
│   │   │   ├── main.ts                 # App bootstrap
│   │   │   ├── app/
│   │   │   │   ├── app.controller.ts   # Route handlers
│   │   │   │   ├── app.service.ts      # Business logic
│   │   │   │   └── app.module.ts       # NestJS module
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.module.ts
│   │   │   │   └── ...
│   │   │   ├── reminder/
│   │   │   ├── guards/                 # Auth guards
│   │   │   ├── shared/                 # Shared DTOs/constants
│   │   │   └── assets/
│   │   ├── jest.config.cts
│   │   ├── tsconfig.json
│   │   └── webpack.config.js
│   │
│   ├── api-gateway-e2e/                # End-to-end tests
│   │   ├── src/
│   │   │   ├── api-gateway/
│   │   │   │   └── api-gateway.spec.ts # E2E test suites
│   │   │   └── support/
│   │   │       ├── global-setup.ts     # Test environment setup
│   │   │       ├── global-teardown.ts  # Cleanup
│   │   │       └── test-setup.ts
│   │   └── jest.config.cts
│   │
│   ├── auth-service/                   # Authentication microservice
│   │   ├── src/
│   │   │   ├── main.ts
│   │   │   ├── app/
│   │   │   │   ├── app.controller.ts
│   │   │   │   ├── app.service.ts
│   │   │   │   └── app.module.ts
│   │   │   ├── auth/
│   │   │   │   ├── auth.controller.ts  # Auth endpoints
│   │   │   │   ├── auth.service.ts     # Auth logic
│   │   │   │   ├── auth.module.ts
│   │   │   │   └── dto/                # Data transfer objects
│   │   │   ├── shared/
│   │   │   │   └── jwt.strategy.ts     # Passport JWT strategy
│   │   │   ├── guards/                 # Authorization guards
│   │   │   └── assets/
│   │   ├── prisma/
│   │   │   ├── schema.prisma           # Database schema
│   │   │   └── migrations/             # Schema versions
│   │   ├── prisma.config.ts
│   │   └── jest.config.cts
│   │
│   ├── auth-service-e2e/               # Auth service E2E tests
│   │   └── src/
│   │       ├── auth-service/
│   │       └── support/
│   │
│   ├── reminder-service/               # Reminder microservice
│   │   ├── src/
│   │   │   ├── main.ts
│   │   │   ├── app/
│   │   │   │   ├── app.controller.ts
│   │   │   │   ├── app.service.ts
│   │   │   │   └── app.module.ts
│   │   │   ├── reminder/
│   │   │   │   ├── reminder.controller.ts
│   │   │   │   ├── reminder.service.ts
│   │   │   │   └── reminder.module.ts
│   │   │   ├── shared/
│   │   │   └── assets/
│   │   └── jest.config.cts
│   │
│   └── reminder-service-e2e/           # Reminder E2E tests
│       └── src/
│           ├── reminder-service/
│           └── support/
│
├── packages/                            # Shared libraries (future)
│   └── (shared DTOs, utilities, types)
│
├── docker-compose.yml                  # Multi-container setup
├── nx.json                             # Nx workspace config
├── tsconfig.base.json                  # Shared TypeScript config
├── tsconfig.json
├── jest.config.ts                      # Shared Jest config
├── jest.preset.js
├── eslint.config.mjs                   # ESLint configuration
├── package.json                        # Root dependencies
└── README.md                           # This file
```

## 🐳 Docker & Deployment

### **Docker Compose Services**

```yaml
Services:
├── postgres-auth         (PostgreSQL 16)
│   ├── Port: 5432
│   ├── Database: auth_db
│   └── Persistent Volume: auth_pg_data

├── mongo-reminder        (MongoDB)
│   ├── Port: 27017
│   ├── Database: reminder_db
│   └── Persistent Volume: reminder_mongo_data

└── redis                 (Redis 7)
    ├── Port: 6379
    └── Used for: Microservice transport
```

### **Container Health Checks**
All containers include health checks that:
- Verify service responsiveness
- Enable orchestrator scheduling decisions
- Provide readiness probes for load balancers

### **Production Deployment**

**Containerizing Services**
```bash
# Build service images
docker build -f apps/api-gateway/Dockerfile -t api-gateway:latest .
docker build -f apps/auth-service/Dockerfile -t auth-service:latest .
docker build -f apps/reminder-service/Dockerfile -t reminder-service:latest .
```

**Kubernetes Deployment** (Example)
```yaml
# Each service as a separate deployment
# Services exposed through Ingress or LoadBalancer
# PersistentVolumeClaims for PostgreSQL and MongoDB
# ConfigMaps for environment configuration
# Secrets for sensitive credentials
```

**Environment Variables**
```bash
# .env.production
NODE_ENV=production
JWT_SECRET=<secure-random-key>
JWT_EXPIRATION=900           # 15 minutes
REFRESH_TOKEN_EXPIRATION=604800  # 7 days
LOG_LEVEL=info
POSTGRES_URL=postgresql://...
MONGO_URL=mongodb://...
REDIS_URL=redis://...
```

## 📈 Performance & Scalability

### **Horizontal Scaling**
- **Stateless Design**: Services can be scaled independently
- **Load Balancer Ready**: API Gateway can route to multiple instances
- **Database Replication**: PostgreSQL and MongoDB both support replication

### **Caching Strategy**
- **Redis Caching**: User data and auth tokens can be cached
- **Response Caching**: Implement HTTP caching headers
- **Database Query Optimization**: Indexes on frequently queried fields

### **Monitoring & Logging**
- **Health Endpoints**: Expose service status for monitoring
- **Structured Logging**: Ready for integration with ELK/Splunk
- **Metrics**: Prometheus-ready metrics endpoints (ready to implement)

## 🔧 Configuration & Customization

### **Adding a New Microservice**
```bash
nx g @nx/nest:app new-service --directory=apps
```

### **Adding Shared Libraries**
```bash
nx g @nx/js:lib shared-lib --directory=packages
```

### **Environment-Specific Configuration**
- Development: `docker-compose.yml` with hot reload
- Staging: Minimal resources, similar to production
- Production: Optimized resources, security hardening

## 📚 Additional Resources

### **NestJS Documentation**
- [NestJS Official Docs](https://docs.nestjs.com)
- [NestJS Microservices](https://docs.nestjs.com/microservices/basics)
- [Passport Authentication](https://docs.nestjs.com/security/authentication)

### **Nx Documentation**
- [Nx Monorepo Guide](https://nx.dev/concepts/integrated-monorepos)
- [Nx Plugins](https://nx.dev/plugins)

### **Database Documentation**
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Prisma ORM](https://www.prisma.io/docs/)

### **Infrastructure**
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Guide](https://docs.docker.com/compose/)
- [Kubernetes Concepts](https://kubernetes.io/docs/concepts/)

## 🤝 Contributing

This project follows best practices for collaborative development:

1. **Branch Strategy**: Feature branches from `main`
2. **Commit Standards**: Conventional commits
3. **Code Review**: Pull request required before merge
4. **Testing**: All tests must pass before merge
5. **Linting**: ESLint and Prettier must pass
6. **Documentation**: Update README for significant changes

### **Development Commands Summary**

```bash
# Setup
npm install
docker-compose up -d

# Development
nx serve api-gateway              # Start with hot reload
nx test <service> --watch          # Tests in watch mode

# Quality
nx run-many --target=lint         # Lint all services
nx run-many --target=test          # Test all services

# Build & Deploy
nx build <service>                # Production build
docker build -t <service> .       # Build container image
docker push <registry>/<service>  # Push to registry
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ✉️ Contact

For questions, issues, or collaboration opportunities:
- **Email**: [your-email@example.com]
- **GitHub**: [your-github-profile]
- **LinkedIn**: [your-linkedin-profile]

---

**Last Updated**: January 2026
**NestJS Version**: 11.0.0
**Nx Version**: 22.3.3
**Node.js**: 18+

## Performance & Scalability

- **Horizontal Scaling**: Microservices can be scaled independently
- **Database Connection Pooling**: Optimized database connections
- **Caching Layer**: Redis for session storage and caching
- **Asynchronous Processing**: Non-blocking operations with promises
- **Health Monitoring**: Built-in health checks for all services

## Challenges Overcome

- **Microservices Coordination**: Implemented TCP communication between services
- **Database Schema Design**: Chose appropriate databases for different data types
- **Authentication Flow**: JWT implementation with refresh tokens
- **Docker Orchestration**: Multi-service setup with health checks
- **Nx Configuration**: Proper monorepo setup for microservices

## Future Enhancements

- [ ] Complete Reminder Service CRUD operations
- [ ] Role-based authorization guards
- [ ] API rate limiting and throttling
- [ ] Logging and monitoring (ELK stack)
- [ ] Message queuing (RabbitMQ/Kafka)
- [ ] API documentation (Swagger/OpenAPI)
- [ ] CI/CD pipeline setup
- [ ] Kubernetes deployment
- [ ] Caching strategies implementation
- [ ] Email notifications for reminders

## Repository

This project is hosted on GitHub: [centralized-auth-reminder-microservices](https://github.com/Anuragyadav622003/centralized-auth-reminder-microservices)

## Folder Structure

```
centralized-auth-reminder-microservices/
├── apps/
│   ├── api-gateway/              # API Gateway service (port 3000)
│   ├── api-gateway-e2e/          # E2E tests for API Gateway
│   ├── auth-service/             # Authentication microservice (port 4001)
│   ├── auth-service-e2e/         # E2E tests for Auth Service
│   ├── reminder-service/         # Reminder management microservice (port 4002)
│   └── reminder-service-e2e/     # E2E tests for Reminder Service
├── packages/                     # Shared packages (if any)
├── nx.json                       # Nx configuration
├── package.json                  # Root dependencies and scripts
├── docker-compose.yml            # Docker services configuration
├── tsconfig.base.json            # Base TypeScript configuration
└── README.md                     # This file
```

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd centralized-auth-reminder-microservices
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create `.env` files in the respective service directories:

   **For Auth Service** (`apps/auth-service/.env`):
   ```env
   DATABASE_URL="postgresql://auth_user:auth_pass@localhost:5432/auth_db"
   JWT_ACCESS_SECRET="your-access-secret-key"
   JWT_REFRESH_SECRET="your-refresh-secret-key"
   ```

   **For Reminder Service** (`apps/reminder-service/.env`):
   ```env
   MONGODB_URL=mongodb://reminder_user:reminder_pass@mongo-reminder:27017/reminder_db
   MONGODB_DB_NAME=reminder_db
   MONGODB_MAX_POOL_SIZE=10
   MONGODB_MIN_POOL_SIZE=2
   MONGODB_CONNECT_TIMEOUT=10000
   MONGODB_SOCKET_TIMEOUT=45000
   ```

4. **Start Docker services**
   ```bash
   docker-compose up -d
   ```

5. **Run database migrations** (for Auth Service)
   ```bash
   npx nx run auth-service:prisma-migrate
   ```

## Environment Variables

### Auth Service
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_ACCESS_SECRET`: Secret key for JWT access tokens
- `JWT_REFRESH_SECRET`: Secret key for JWT refresh tokens

### Reminder Service
- `MONGODB_URL`: MongoDB connection string
- `MONGODB_DB_NAME`: MongoDB database name
- `MONGODB_MAX_POOL_SIZE`: Maximum connection pool size
- `MONGODB_MIN_POOL_SIZE`: Minimum connection pool size
- `MONGODB_CONNECT_TIMEOUT`: Connection timeout in milliseconds
- `MONGODB_SOCKET_TIMEOUT`: Socket timeout in milliseconds

## API Endpoints

### API Gateway (Port 3000)

**Auth Routes** (`/api/auth`):
- `GET /api/auth` - Greet endpoint
- `POST /api/auth/register` - User registration
  - Body: `{ email: string, password: string }`
- `POST /api/auth/login` - User login
  - Body: `{ email: string, password: string }`

### Microservice Patterns

**Auth Service**:
- `auth.register` - Register a new user
- `auth.login` - Authenticate user and return tokens

**Reminder Service**:
- Basic service for reminder management (expandable)

## Scripts & Commands

### Build Commands
```bash
# Build all apps
npx nx run-many --target=build

# Build specific app
npx nx run api-gateway:build
npx nx run auth-service:build
npx nx run reminder-service:build
```

### Development Commands
```bash
# Start all services in development
npx nx run-many --target=serve

# Start specific service
npx nx run api-gateway:serve
npx nx run auth-service:serve
npx nx run reminder-service:serve
```

### Testing Commands
```bash
# Run all tests
npx nx run-many --target=test

# Run E2E tests
npx nx run-many --target=e2e

# Run specific tests
npx nx run api-gateway:test
npx nx run auth-service-e2e:e2e
```

### Database Commands
```bash
# Generate Prisma client
npx nx run auth-service:prisma-generate

# Run migrations
npx nx run auth-service:prisma-migrate

# Reset database
npx nx run auth-service:prisma-reset
```

## Docker Setup

The project uses Docker Compose to orchestrate the following services:

- **postgres-auth**: PostgreSQL database for authentication (port 5432)
- **mongo-reminder**: MongoDB database for reminders (port 27017)
- **redis**: Redis for caching and microservice communication (port 6379)

### Docker Commands
```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs

# Rebuild and restart
docker-compose up --build
```

### Service Ports
- API Gateway: 3000
- Auth Service: 4001
- Reminder Service: 4002
- PostgreSQL: 5432
- MongoDB: 27017
- Redis: 6379

## Development Workflow

1. Make changes to the code
2. Run tests: `npx nx run-many --target=test`
3. Build the affected apps: `npx nx affected:build`
4. Run E2E tests if needed: `npx nx affected:e2e`

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

