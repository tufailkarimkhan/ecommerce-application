# --- STAGE 1: Build ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and install ALL dependencies (including typescript)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy source code and build the project
COPY . .
RUN npm run build

# --- STAGE 2: Run ---
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only the production dependencies (to keep image small)
COPY package*.json ./
RUN npm install --production --legacy-peer-deps

# Copy the compiled code from the builder stage
COPY --from=builder /app/dist ./dist
# Copy your .env file (if needed inside container)
COPY .dev.env ./

# Install wait-port for DB readiness
RUN npm install -g wait-port

EXPOSE 8080

# Start the application using the compiled JavaScript
CMD wait-port -t 60000 db:3306 && npm start