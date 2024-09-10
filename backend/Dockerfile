# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the app files
COPY . .

# Expose the port for Express server
EXPOSE 3000

# Start the backend server
CMD ["node", "server.js"]
