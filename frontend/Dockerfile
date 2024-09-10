# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the app files
COPY . .

# Expose the port for Vite dev server
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]
