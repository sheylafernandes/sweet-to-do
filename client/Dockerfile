# Base image: Node 14 using Alpine Linux 3.10
FROM node:14-alpine3.10 as builder

# Create app dir
RUN mkdir -p /home/node/app

# Define work dir
WORKDIR /home/node/app

# Copy FE package.json
COPY package.json /app/package.json

# Install FE Node modules
RUN npm install

# Copy FE files to work dir
COPY . /app

# Start FE
RUN npm run build

# Use NGINX 1.19 with Alpine Linux 3.12 to host FE
FROM nginx:1.19.6-alpine

# Copy FE static files to NGINX public dir
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run NGINX
CMD ["nginx", "-g", "daemon off;"]
