# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the app will run on (adjust if needed)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]

