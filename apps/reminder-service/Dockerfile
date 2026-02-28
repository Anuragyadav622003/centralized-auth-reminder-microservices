# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig*.json ./
COPY nx.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY apps/reminder-service ./apps/reminder-service
COPY shared-types ./shared-types
COPY shared-events ./shared-events

# Build the application
RUN npx nx build reminder-service --configuration=production

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Install build dependencies for bcrypt
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev && npm cache clean --force

# Copy built application
COPY --from=builder /app/dist/apps/reminder-service ./dist

# Expose port
EXPOSE 4002

# Start the application
CMD ["node", "dist/main.js"]
