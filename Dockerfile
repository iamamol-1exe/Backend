FROM node:22.19.0

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install ALL dependencies (including devDependencies)
RUN npm install

# Copy all source code
COPY . .

# Create user and set permissions
RUN groupadd -r nodejs && useradd -r -g nodejs nodejs
RUN mkdir -p logs && chown -R nodejs:nodejs /app

USER nodejs

EXPOSE 4001

# Use ts-node directly - no build step needed
CMD ["npm", "start"]
