
  <span style="font-size: 0.8em; text-align: right;">
    <h1> EazyStore Installation and Setup Guide</h1>
    Created by:<br>
    Ludovic Devaux<br>
    Naida Kaljanac<br>
    Ejonë Analumi
  </span>


## 1. Overview

EazyStore is a backend project for an e-commerce application built with Spring Boot. It provides APIs for managing products and orders.

### Key Features

* Spring Boot 3.4.3 backend
* Java 21
* MySQL database
* Spring Data JPA for ORM
* Spring Security with JWT
* Stripe payment integration
* Actuator for monitoring
* Swagger/OpenAPI documentation
* Local frontend connection (React/Vite)

## 2. Prerequisites

Before starting, ensure your system has the following installed:

| Component | Version / Notes |
|-----------|----------------|
| Java | 21 (OpenJDK or Oracle JDK) |
| Maven | 3.8+ |
| MySQL | 8.x (or compatible) |
| IDE | IntelliJ IDEA, VS Code, or similar (optional) |
| Node.js / NPM | Optional, for frontend React/Vite connection |
| Docker | Docker Engine or Docker Desktop |

## 3. Installation Steps

### 3.1 Clone the Repository
```bash
git clone https://github.com/naidakk/SoftwareTesting_EazyStore.git
```

### 3.2 Database Setup

1. Pull the MySQL Docker image:
```bash
docker pull mysql:8
```

2. Run the MySQL container:
```bash
docker run --name eazystore-db \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=eazystore \
  -p 3306:3306 \
  -d mysql:8
```

3. Verify MySQL is running:
```bash
docker ps
```

You should see the `eazystore-db` container in the list.

### 3.3 Start the Backend

1. Open your IDE for backend development (IntelliJ IDEA, for example)

2. Navigate to: `SoftwareTesting_EazyStore` → `EazyStore-app` → `eazystore`

3. Run in the embedded terminal:
```bash
mvn clean install
```

4. Run the backend via Maven:
```bash
mvn spring-boot:run
```

By default, the backend will run on `http://localhost:8080`

### 3.4 Start the Frontend

1. Keep the backend project running and open the frontend in a new project window

2. Navigate to: `SoftwareTesting_EazyStore` → `EazyStore-app` → `eazystore-ui`

3. Install frontend dependencies:
```bash
npm install
```

4. Start the frontend:
```bash
npm run dev
```

The development server will start and display the local URL (typically `http://localhost:5173/`). Access the application by opening this URL in your web browser.

## 4. API Documentation & Monitoring

### Swagger UI

Access the Swagger UI for API documentation:
```
http://localhost:8080/swagger-ui/index.html
```

### Actuator Endpoints

Monitor application health and metrics:

- **Full health**: `http://localhost:8080/eazystore/actuator/health`
- **All endpoints**: `http://localhost:8080/eazystore/actuator`
- **Config, environment, info**: Accessible under `/eazystore/actuator/...`

