# Use the official Node.js image as the base image
FROM node:18.16.0-alpine3.18

# Set the working directory
WORKDIR /api

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm ci --production

# Copy the rest of the application code
COPY . .

# Expose the port your application runs on
EXPOSE 3000

ENV NODE_ENV production

# Start the application in development mode
CMD ["node" , "server.js"]