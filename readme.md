# 📚 Library Management System - Backend API

An Expressjs(framework of Node.js)-based backend API for managing a library's books and borrowing system. Built with **Express.js**, **MongoDB**, and **Mongoose**, and deployed on **Vercel**.

## 🚀 Live API Endpoint

**Deployed on Vercel**:  
🔗 https://library-management-api-swart.vercel.app

---

## 📁 Project Structure
```
src/
├── server.ts # Main Express app
├── modules/
│ ├── book/ # Book model, controller, routes
│ └── borrow/ # Borrow model, controller, routes
├── middlewares/ # Global error/validation handling
└── routes /# routes of book and borrow
└── util/ # initial api welcome message/ welcome route
```

## 🛠 Technologies Used

- **Node.js** with **TypeScript**
- **Express.js** – Web framework
- **MongoDB** – Database
- **Mongoose** – ODM with schema validation and static methods
- **Vercel** – Deployment platform
- **Custom Global Validation Middleware** – Handles consistent error response

## 📌 Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/masudsw/library-management-System.git
   cd library-management-System
```
2. **Install dependencies:**

   
   
 ```bash
   npm install
  ```

   
3. **Create .env file:**
   
 ```bash
PORT=5000
MONGODB_URI=mongodb+srv://<your-mongo-uri>

```
  4. **Run locally:** 
   
 ```bash
   npm run dev
   ```
   5. **Build for production:** 
   
   ```bash
   npm run build
   ```

   📚 API Endpoints<br>
   📘 Book Routes (/api/books)


### 📘 Book Routes (`/api/books`)

| Method | Endpoint         | Description                      |
|--------|------------------|----------------------------------|
| POST   | `/api/books`     | Add a new book                   |
| GET    | `/api/books`     | Get all books                    |
| GET    | `/api/books/:id` | Get a single book by ID          |
| PATCH  | `/api/books/:id` | Update a book by ID              |
| DELETE | `/api/books/:id` | Delete a book by ID              |


### 📘 Borrow Routes (`/api/borrow`)

| Method | Endpoint         | Description                             |
|--------|------------------|-----------------------------------------|
| POST   | `/api/borrow`     | Add a borrow information               |
| GET    | `/api/borrow`     | Get aggretated result of borrowed books|

🧑‍💻 Author
Golam Mustafa (masudsw)
📫 [LinkedIn](https://www.linkedin.com/in/golam-mustafa-masud) 

