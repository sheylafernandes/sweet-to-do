# Base image: Node 14 using Alpine Linux 3.10
FROM node:14-alpine3.10

# Install basics
RUN apk update && apk add \
	curl \
	vim \
	git

# Create app dir
RUN mkdir -p /home/node/app /home/node/app

# Define work dir
WORKDIR /home/node/app

# Copy package.json
COPY package.json /home/node/app/package.json

# Install Node modules
RUN npm install

# Install PM2 globally
RUN npm install pm2 -g

# Copy files to work dir
COPY . /home/node/app

# Expose port 8080
EXPOSE 8080

# Production: CMD ["pm2-runtime", "/home/node/app/processes.json"]
CMD ["pm2-dev", "/home/node/app/ecosystem.json"]
# CMD ["pm2 start", "/home/node/app/ecosystem.config.js"]
# CMD ["node", "/home/node/app/src/index.js"]

# Start Server
# RUN npm run start

# Define user
# USER node


# Run app
# CMD ["pm2 start --watch logs", "/home/node/app/src/index.js"]
