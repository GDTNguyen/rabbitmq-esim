FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json & package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source code
COPY . .

# Expose the app port
EXPOSE 3010

# Run the app
CMD ["npm", "run", "start"]