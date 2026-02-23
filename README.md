# 🗂 Task Manager API

A RESTful Task Manager API built with **Node.js**, **Express**, and **MongoDB Atlas**, including integration with an external public API (TheMealDB).

---

## 🚀 Features

- Create tasks
- List all tasks
- Delete tasks
- Fetch external categories from TheMealDB API
- MongoDB Atlas cloud database integration
- Organized project structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Axios
- Dotenv

---

## 📁 Project Structure

### Folder Organization

![Project Structure](./images/Screenshot%202026-02-23%20195256.png)

---

## 📄 Model - task.js

This file defines the MongoDB schema using Mongoose.

![task.js](./images/Screenshot%202026-02-23%20195157.png)

---

## 📄 Routes - taskRoutes.js

Responsible for handling API routes and external API integration.

![taskRoutes.js](./images/Screenshot%202026-02-23%20195238.png)

---

## 🌍 External API Integration

The project consumes the public API:


https://www.themealdb.com/api/json/v1/1/categories.php


Endpoint available:


GET /tasks/categories


---

## 📌 API Endpoints

| Method | Route | Description |
|--------|-------|------------|
| POST | /tasks | Create a new task |
| GET | /tasks | Get all tasks |
| DELETE | /tasks/:id | Delete task |
| GET | /tasks/categories | Fetch categories from external API |

---

## 🔐 Environment Variables

Create a `.env` file:


MONGO_URI=your_mongodb_connection_string
PORT=3000


---

## ▶️ Run Locally

```bash
npm install
npm run dev
👨‍💻 Author

Backend project developed using Node.js, Express and MongoDB Atlas.
