# WELCOME TO THE JAVA FULLSTACK DEVELOPER COURSE 📚

A **Fullstack Developer** is a software professional skilled in both **frontend** and **backend** development.  
They build complete applications—from designing user interfaces to writing server-side logic and managing databases.

👉 In modern companies, Fullstack Developers are highly valued because they can work across the entire application lifecycle—from **concept to production**.

## What you learn 🎯

### ⚛️ React

- React Basics
- Tailwind CSS, Dark mode
- React Events & Hooks
- React Route
- React Context
- Redux

### 🌱 Spring
- Spring IoC, DI
- Spring Beans
- Beans Autowiring
- Beans scope

### 🍃 Spring Boot
- Stater projects, Auto configurations
- Building Rest API'S, API documentation
- Validations, Global Exception Handling
- Auditing, LOgging. Actuator, Profiles, Caching
- H2 DB, MySQL DB, Spring Data Jpa
- Spring Security, CORs, CSRF, AuthN & AuthZ, JWT tokens

### ⚙️ Tools

- Visual Studio code, IntelliJ IDEA
- Maven, Lombok, DTO patterns
- Stripe Checkout, Docker
- E-commerce App

## 🌐 Evolution of Web Apps

How web applications have evolved over time:

1️⃣ **Static Websites (Early 1990s)**
- Built using only **HTML & CSS**.
- Simple, read-only websites with no interactivity.

2️⃣ **Dynamic Websites (Early 2000s)**
- Added interactivity with **HTML, CSS, JavaScript, PHP, ASP.NET, JSP**.
- Connected to databases like **MySQL**.
- Supported forms, user logins, and content management.

3️⃣ **AJAX & jQuery Revolution (Mid-2000s)**
- **AJAX** and **jQuery** introduced more dynamic, real-time interactions.
- Websites became smoother and more responsive.

4️⃣ **Single Page Applications (2010s)**
- Emergence of **SPAs** using frameworks like **Angular, React, Vue.js**.
- Provided app-like experiences in the browser.

5️⃣ **Fullstack Applications (Modern Era)**
- Today’s applications use **React (frontend)**, **Spring Boot (backend)**, and **MySQL (database)**.
- These technologies power the **Fullstack Development** which we’ll learn in this course.

## Creating a Hello World App with React & Vite

### Step 1: Install Node.js

- React and Vite require Node.js to run.

- Go to [Node.js official website](https://nodejs.org/en).

- Download the LTS (Long Term Support) version (recommended for most users).

- Install it using the installer.

- Verify installation in the terminal:

``` 
node -v
npm -v
```

You should see versions like:
```
node: v20.5.0
npm: 10.3.0
```
### Step 2: Create a React project using Vite

Vite is a modern build tool that’s faster than create-react-app.

Open your terminal and run:

```
npm create vite@latest
```
You will be prompted for:

- Project name: e.g., hello-world

- Framework: choose React

- Variant: choose JavaScript (or TypeScript if you want TS)

Go into the project folder:
```
cd hello-world
```
Install dependencies:
```
npm install
```
### Step 3: Start the development server
```
npm run dev
```

You should see output like:
```

  VITE v4.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ```
Open http://localhost:5173/ in your browser, and you should see your React app running.


### Step 4: Create a “Hello World” Component

Open src/App.jsx (or src/App.js).

Replace its content with:

```javascript
function App() {
  return (
    <div>
      <h1>Hello World from React + Vite!</h1>
    </div>
  );
}

export default App;
```

Save the file, and your browser should automatically refresh showing Hello World from React + Vite!

✅ And that’s it! You now have a running React app using Vite.

## Downloading IntelliJ IDEA

To start working with Java or other languages, you need an IDE.  
We recommend using [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) by JetBrains.

### Steps to Download:

-  Click the link above to go to the IntelliJ IDEA download page.
- Choose your operating system: Windows, macOS, or Linux.
- Select the edition:
    - **Community Edition** – Free, good for most projects.
    - **Ultimate Edition** – Paid, includes advanced features for web and enterprise development.
- Download and run the installer.
- Follow the installation instructions on your OS.
- Once installed, launch IntelliJ IDEA and configure your JDK if prompted.

## Hello World Spring Boot App

To create a simple Spring Boot application that prints "Hello World", follow these steps:

### Prerequisites

- [Java JDK 17+](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) installed
- [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) (Community or Ultimate Edition)
- [Maven](https://maven.apache.org/download.cgi) (optional, IntelliJ can handle Maven automatically)

---

### Steps to Create the App

1. **Create a Spring Boot Project:**
    - Go to [Spring Initializr](https://start.spring.io/)
    - Project: Maven Project
    - Language: Java
    - Spring Boot: Latest stable version
    - Dependencies: Spring Web
    - Click **Generate**, download the zip, and extract it.

2. **Open in IntelliJ IDEA:**
    - Open IntelliJ → `File → Open` → Select the extracted folder.
    - Wait for IntelliJ to import the project and resolve dependencies.

3. **Create a HelloController:**
   Inside `src/main/java/com/example/demo`, create a new Java class called `HelloController.java`:

   ```java
   package com.example.demo;

   import org.springframework.web.bind.annotation.GetMapping;
   import org.springframework.web.bind.annotation.RestController;

   @RestController
   public class HelloController {

       @GetMapping("/hello")
       public String hello() {
           return "Hello World from Spring Boot!";
       }
   }

4. Run the Application:

- Run the main class DemoApplication.java (generated by Spring Initializr)

- Spring Boot will start on port 8080 by default.

5. Test the App:

- Open your browser or Postman and go to:
```
http://localhost:8080/hello
```

You should see:
```
Hello World from Spring Boot!
```

# Library vs Framework

When developing software, you will often hear about **libraries** and **frameworks**. Both help you reuse code, but they differ in **control** and **structure**.

---

## Library
- A collection of reusable code designed to perform specific tasks (e.g., manipulating strings, handling HTTP requests, working with dates).
- You **call the library's methods/functions** directly from your code.
- Offers **flexibility** — you choose which parts to use and when.
- Typically easier to learn since you only need to understand the functions you plan to use.
- Best suited for **modular tasks** where control remains with the developer.
- **Examples:**
    - React (JavaScript)
    - Lombok (Java)
    - TensorFlow (Python)

---

## Framework
- Provides a **foundation and architecture** for building software applications.
- Follows the principle of **Inversion of Control (IoC)** — the framework calls your code, not the other way around.
- Frameworks **impose structure** — you follow predefined rules and flow.
- Often has a **steeper learning curve** because it requires understanding the entire architecture.
- Best suited for **large-scale, complex applications** where consistency and structure are critical.
- **Examples:**
    - Angular (JavaScript)
    - Spring Boot (Java)
    - Django (Python)

---

## Key Difference

| Aspect          | Library                         | Framework                          |
|-----------------|---------------------------------|------------------------------------|
| Control         | You call the library            | Framework calls your code          |
| Structure       | Flexible, optional              | Prescribes structure               |
| Learning Curve  | Easier to learn                 | Steeper, requires architecture     |
| Best Use Case   | Modular, flexible tasks         | Large-scale, structured apps       |
| Examples        | React, Lombok, TensorFlow       | Angular, Spring Boot, Django       |

---

## 🎓 Quick Takeaway for Students
- **If you're calling the code → Library**
- **If the code is calling you → Framework**

## Conclusion 🎉

Congratulations! You have completed the first section of the Java Fullstack Developer course.

Here’s what you have learned so far:

- **Frontend Basics:** How to set up a React project with Vite and create a simple "Hello World" app.
- **Backend Basics:** How to set up a Spring Boot project, create a REST controller, and run your first Spring Boot application.
- **Development Tools:** Installing and using IntelliJ IDEA to manage Java projects efficiently.
- **Core Concepts:** Understanding the difference between libraries and frameworks, and when to use each in real-world projects.

By mastering these fundamentals, you are now equipped to build fullstack applications that combine modern frontend and backend technologies.

💡 **Next Steps:** Keep practicing by building small apps, experimenting with React components, Spring Boot APIs, and exploring more libraries and frameworks. This will solidify your foundation and prepare you for advanced topics in fullstack development.



