wordpress-theme-docker-boilerplate
============
This is a template that I use to create a dockerized wordpress theme. The setup is not perfect, but it is great for local development and production deployments. ES6 + SCSS + Hot Reloading

## Usage ##

You will need to install the following on your development machine:
- Docker
- Docker Compose
- [Node](https://nodejs.org/en/)

1. Navigate to the root directory and find `.env.example` file. Copy it and create new `.env` file. Open it and change values of environment variables. Make copy of `docker-compose.yml.example` as `docker-compose.yml`

2. Install all the node dependencies by running 
```
npm install
```

3. Build the containers images:

```
docker-compose build
```
4. Start the containers in the background and leaves them running:
```
docker-compose up -d
```

or just ```docker-compose up -d --build``` to combine the above commands:

>When you start containers, you may get following problem:
  __"Cannot start container: port has already been allocated"__
This error indicates that the another application running on the same ports  as the current application containers is running on the local computer. Solve the problem by changing the container port that are causing problems in the ```.env``` file:
```APP_PORT=8080```

#### Development ####
Run webpack dev server that will build all of the static files with hot reloading [http://localhost:8080](http://localhost:8080). Use the port that is specified in the ```.env``` file (```APP_PORT```)
```
npm start
```

#### Build ####
Build development assets
```
npm run build
```

Build production assets
```
npm run prod_build
```

#### Analyze  ####
Analyze development assets
```
npm run analyze
```

Analyze production assets
```
npm run prod_analyze
```

Troubleshooting
=============================
If you have troubles with node packages run 
```
npm run reinstall
```
