# EazyStore Installation and Setup Guide

# 1.Overview

EazyStore is a backend project for an e-commerce application built with Spring Boot. It provides APIs for managing products and orders.

## Key Features:

· Spring Boot 3.4.3 backend

·Java 21

· MySQL database

·Spring Data JPA for ORM

·Spring Security with JWT

· Stripe payment integration

**·** Actuator for monitoring

**·** Swagger/OpenAPI documentation

·Local frontend connection (React/Vite)

## Prerequisites

Before starting, ensure your system has the following installed:

Java 21 (OpenJDK or Oracle JDK)

Maven 3.8+

Docker

IDE IntelliJ IDEA, VS Code, or similar (optional)

Node.js / NPM Optional, for frontend React/Vite connection

## Clone the repository

`git clone https://github.com/naidakk/fullstack-react-springboot.git`


## Pull the MySQL Docker image:

`docker pull mysql:8`

## Run the MySQL container:

docker run --name eazystore-db\

-e MYSQLROOTPASSWORD=root \

-e MYSQLDATABASE=eazystore \

-p 3306:3306\

-d mysql:8 

# Build the backend (Spring Boot)
`cd eazystore`
`mvn clean install`

## Run the backend via Maven:

`mvn spring-boot:run`

By default, the app will run on http://localhost:8080

## Install frontend dependencies

`cd eazystore-ui`

`npm install`

## Start the frontend:

`npm run dev`

The frontend will communicate with the backend at http://localhost:8080.

## Swagger & Actuator Endpoints

Swagger UI access:

http://localhost:8080/swagger-ui/index.html

## Actuator endpoints:

- Full health:http://localhost:8080/eazystore/actuator/health

-All endpoints: http://localhost:8080/eazystore/actuator

- Config, environment, info: accessible under /eazystore/actuator/..



