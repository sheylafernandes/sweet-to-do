# Sweet To Do

Welcome to Sweet To Do!

# Install Project with Docker

Follow the steps to start and configure the project:

## 1) Download Docker Engine

Download and install Docker Engine according to your OS: [Download](https://docs.docker.com/engine/install/)

## 2) Clone project

Create the project's directory by opening a terminal and typing:

```
mkdir sweet-to-do && cd sweet-to-do
```

Clone the **Sweet To Do** project inside your brand new directory:

```
git clone https://github.com/sheylafernandes/sweet-to-do.git .
```

## 3) Define environment

For development:

```
NODE_ENV=development
PORT=8080
```

For production:

```
NODE_ENV=production
PORT=8080
```


## 4) Build Docker container image for Backend

In the root of sweet-to-do directory, run this command:

```
docker build --no-cache --progress=plain -t sheylafernandes/sweet-to-do:1.0 .
```

## 5) Run Docker container for Backend

In the root of sweet-to-do directory, run this command:

```
docker-compose up --build
docker run --name sweet-to-do-server -p 8080:8080 sheylafernandes/sweet-to-do:1.0
```

# Install Project without Docker

- Clone project
- Install Packages: npm install
- Install PM2 Monitor as global package: npm install pm2 -g
- Configure .env
- Start server: npm run start







# Cool things

## Commands

### Access the shell of your running image:

```
docker run --rm -ti sheylafernandes/sweet-to-do:1.0 /bin/sh
```

### List all images running in your machine:

```
docker images -a
```

Result:
```
REPOSITORY              TAG       IMAGE ID       CREATED          SIZE
sheylafernandes/sweet-to-do   1.0       bfec83f334c9   24 minutes ago   26.3MB

```

### Cleaning up:

```
docker system prune
```

This command will remove:

- all stopped containers
- all networks not used by at least one container
- all dangling images
- all dangling build cache

