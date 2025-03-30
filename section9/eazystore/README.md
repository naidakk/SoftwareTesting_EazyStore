# 🛢️ EazyStore MySQL Setup with Docker & Sqlectron

This guide helps you spin up a MySQL database using Docker and connect to it via the **Sqlectron** SQL client.

---

## 🚀 Step 1: Start MySQL in Docker

Run the following command in your terminal:

```bash
docker run -p 3306:3306 \
  --name eazystoredb \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=eazystore \
  -v /Users/eazybytes/Desktop/eazystore-data:/var/lib/mysql \
  -d mysql
```

# 🖥️ Step 2: Connect Using Sqlectron

Download Sqlectron (GUI client for SQL databases) from the official site:

👉 https://sqlectron.github.io/