# 🏡 WanderWay – Property Listing & Booking Platform

**WanderWay** is a full-stack web application that allows users to explore, list, and book travel properties. It features Secure authentication, role based access control(RBAC) and real-time CRUD operations for a seamless booking experience.

## 🚀 Features

- 🔍 Property search with filtering and pagination
- 🧱 MVC architecture for clean and scalable backend
- 🔐 JWT & Passport.js-based authentication with role-based access (user/admin)
- 🌐 20+ RESTful APIs for frontend-backend communication
- 🏘️ Full CRUD for property listings
- 🧾 Input validation using JOI
- 🗃️ MongoDB & Mongoose for data modeling and relations
- 📱 Responsive UI with EJS templating
- ☁️ Deployed on Render with 99.5% uptime

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas, Mongoose
- **Authentication**: Passport.js, JWT
- **Validation**: JOI
- **Version Control**: Git, GitHub
- **Deployment**: Render

## 📂 Folder Structure

```
wanderway/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── middleware.js
├── server.js
```

## 🧪 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/akshayhatture/wanderway.git
   cd wanderway
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set environment variables in `.env`:
   ```
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_secret
   ```

4. Run the development server:
   ```bash
   npm start
   ```

## 📸 Demo

[Live Demo](https://wanderwayy.onrender.com)

---

> Built for hands-on experience with full-stack web development.
