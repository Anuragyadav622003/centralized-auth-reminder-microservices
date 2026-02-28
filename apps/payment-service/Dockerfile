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
COPY apps/payment-service ./apps/payment-service
COPY shared-types ./shared-types
COPY shared-events ./shared-events

# Generate Prisma client
RUN cd apps/payment-service && npx prisma generate

# Build the application
RUN npx nx build payment-service --configuration=production

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Install OpenSSL for Prisma and build dependencies for bcrypt
RUN apk add --no-cache openssl python3 make g++

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev && npm cache clean --force

# Copy Prisma schema and generate client
COPY apps/payment-service/prisma ./prisma
RUN npx prisma generate --schema=./prisma/schema.prisma

# Copy built application
COPY --from=builder /app/dist/apps/payment-service ./dist

# Expose port
EXPOSE 4006

# Start the application
CMD ["node", "dist/main.js"]
