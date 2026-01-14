# Centralized Auth Reminder Microservices

## Project Overview

This is a microservices-based application built with NestJS and Nx, featuring centralized authentication and reminder management. The architecture consists of an API Gateway that routes requests to specialized services: an Auth Service for user authentication and a Reminder Service for managing reminders.

## Tech Stack

- **Framework**: NestJS (Node.js) - Chosen for its modular architecture, dependency injection, and excellent support for microservices
- **Language**: TypeScript - Provides type safety, better IDE support, and reduces runtime errors
- **Build System**: Nx - Enables efficient monorepo management, shared libraries, and optimized builds
- **Databases**:
  - PostgreSQL (Auth Service) - ACID-compliant relational database for user data integrity
  - MongoDB (Reminder Service) - NoSQL database for flexible reminder data structures
  - Redis (Caching & Transport) - High-performance caching and message broker for microservices
- **ORM**: Prisma (Auth Service) - Type-safe database access with auto-generated client
- **Testing**: Jest - Comprehensive testing framework with built-in mocking
- **Linting**: ESLint - Code quality and consistency enforcement
- **Containerization**: Docker & Docker Compose - Ensures consistent environments across development and production

## Architecture & Design Decisions

### Microservices Architecture
- **API Gateway Pattern**: Single entry point for all client requests, enabling centralized routing, authentication, and rate limiting
- **Service Separation**: Auth Service handles authentication logic, Reminder Service manages reminder data, promoting loose coupling and independent scaling
- **TCP-based Communication**: Uses NestJS microservices with TCP transport for efficient inter-service communication

### Database Choices
- **PostgreSQL for Auth**: Chosen for its strong consistency guarantees, complex queries, and relationship management required for user authentication
- **MongoDB for Reminders**: Selected for its flexibility in handling unstructured reminder data and potential for horizontal scaling

### Security Implementation
- **JWT Authentication**: Stateless token-based authentication with access and refresh tokens
- **Password Hashing**: Secure password storage (implementation ready for bcrypt)
- **Role-based Access Control**: User roles (CLIENT/ADMIN) for future authorization features

### Development Best Practices
- **Nx Monorepo**: Efficient code sharing, consistent tooling, and optimized CI/CD pipelines
- **TypeScript**: Compile-time type checking prevents common errors
- **Comprehensive Testing**: Unit tests, integration tests, and E2E tests ensure code reliability
- **Docker Containerization**: Consistent development and deployment environments

## Key Features Implemented

### Authentication System
- ✅ User registration with email validation
- ✅ Secure login with JWT token generation
- ✅ Refresh token mechanism for session management
- ✅ Password hashing (bcrypt integration ready)
- ✅ User roles (CLIENT/ADMIN) for future RBAC

### Microservices Communication
- ✅ TCP-based inter-service messaging
- ✅ API Gateway routing and load balancing
- ✅ Service discovery and health checks

### Database Integration
- ✅ Prisma ORM with PostgreSQL for auth data
- ✅ MongoDB service with connection pooling
- ✅ Database migrations and schema management
- ✅ Health checks and connection monitoring

### Infrastructure & DevOps
- ✅ Docker Compose for multi-service orchestration
- ✅ Environment-based configuration
- ✅ Health checks for all services
- ✅ Development and production-ready setups

### Testing & Quality Assurance
- ✅ Unit tests for all services
- ✅ E2E tests for critical user journeys
- ✅ ESLint configuration for code quality
- ✅ Jest testing framework integration

## Security Features

- **JWT Token Authentication**: Stateless authentication with configurable expiration
- **Refresh Token Rotation**: Secure token renewal mechanism
- **Environment Variable Management**: Sensitive data stored securely
- **Input Validation**: DTOs for request validation
- **CORS Configuration**: Cross-origin resource sharing setup
- **Rate Limiting**: Ready for implementation at API Gateway level

## Database Schema

### Auth Service (PostgreSQL)
```sql
- Users: id, email, password, role, timestamps
- RefreshTokens: id, token, userId, expiresAt
```

### Reminder Service (MongoDB)
- Flexible schema for reminder documents (expandable)

## Testing Strategy

- **Unit Tests**: Service logic, utilities, and helpers
- **Integration Tests**: Database operations and service interactions
- **E2E Tests**: Complete user workflows through API Gateway
- **Test Coverage**: Comprehensive coverage for critical paths

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

