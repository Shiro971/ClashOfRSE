# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./
# If using Yarn:
# COPY yarn.lock ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the Expo port (default is 19000)
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Set the default command to start the Expo development server
CMD ["npx", "expo", "start", "--tunnel"]
