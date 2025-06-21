# 📚 Library Management System - Backend API

An Expressjs(framework of Node.js)-based backend API for managing a library's books and borrowing system. Built with **Express.js**, **MongoDB**, and **Mongoose**, and deployed on **Vercel**.

## 🚀 Live API Endpoint

**Deployed on Vercel**:  
🔗 https://library-management-system-eta-two.vercel.app/

---

## 📁 Project Structure

src/
├── server.ts # Main Express app
├── modules/
│ ├── book/ # Book model, controller, routes
│ └── borrow/ # Borrow model, controller, routes
├── middlewares/ # Global error/validation handling
└── routes /# routes of book and borrow
└── util/ # initial api welcome message/ welcome route

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

   Install dependencies:
   `
   <pre>
   npm install
   <pre>

   
   `
   Create .env file:
`
PORT=5000
MONGODB_URI=mongodb+srv://<your-mongo-uri>

`
   
   Run locally:
   `
   npm run dev
   `
   
   Build for production:
   `
   npm run build
   `

   📚 API Endpoints
   📘 Book Routes (/api/books)

   Method	Endpoint	Description
POST	/api/books	Add a new book
GET	/api/books	Get all books (filter/sort/limit supported)
GET	/api/books/:id	Get a single book by ID
PATCH	/api/books/:id	Update a book by ID
DELETE	/api/books/:id	Delete a book by ID