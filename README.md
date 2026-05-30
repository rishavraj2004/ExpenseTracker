# Expense Tracker

A simple and secure Expense Tracker web application built using Node.js, Express.js, MongoDB, Mongoose, EJS, and Session Authentication.

Users can create an account, log in securely, add expenses, edit expenses, delete expenses, and track their spending through a clean dashboard.

---

## Features

### Authentication

- User Registration
- User Login
- Password Hashing using bcryptjs
- Session-based Authentication
- Protected Dashboard Routes
- Logout Functionality

### Expense Management

- Add New Expenses
- View All Expenses
- Edit Existing Expenses
- Delete Expenses
- Automatic Date & Time Tracking
- User-specific Expense Records

### Dashboard

- Personalized Welcome Message
- Total Expense Calculation
- Expense Listing
- Responsive UI
- Secure Access Control

---

## Tech Stack

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose ODM

### Authentication

- Express Session
- bcryptjs

### Frontend

- EJS
- CSS

---

## Project Structure

```bash
Expense Tracker
│
├── controllers
│   ├── authController.js
│   └── expenseController.js
│
├── middleware
│   └── isAuth.js
│
├── models
│   ├── user.js
│   └── expense.js
│
├── public
│   └── css
│       ├── dashboard.css
│       ├── login.css
│       └── register.css
│
├── routes
│   ├── authRoutes.js
│   ├── dashboardRoutes.js
│   └── expenseRoutes.js
│
├── views
│   ├── auth
│   │   ├── login.ejs
│   │   └── register.ejs
│   │
│   ├── dashboard.ejs
│   └── edit-expense.ejs
│
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## Database Schema

### User

```javascript
{
  firstName: String,
  lastName: String,
  email: String,
  password: String
}
```

### Expense

```javascript
{
  userId: ObjectId,
  amount: Number,
  spentOn: String,
  note: String,
  createdAt: Date
}
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd expense-tracker
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string
```

### Start Development Server

```bash
npm start
```

Server will run on:

```bash
http://localhost:3000
```

---

## Routes

### Authentication

| Method | Route        | Description   |
| ------ | ------------ | ------------- |
| GET    | /auth/login  | Login Page    |
| POST   | /auth/login  | Login User    |
| GET    | /auth/signup | Signup Page   |
| POST   | /auth/signup | Register User |
| POST   | /auth/logout | Logout User   |

### Dashboard

| Method | Route      | Description    |
| ------ | ---------- | -------------- |
| GET    | /dashboard | User Dashboard |

### Expenses

| Method | Route                | Description       |
| ------ | -------------------- | ----------------- |
| POST   | /expenses/add        | Add Expense       |
| GET    | /expenses/edit/:id   | Edit Expense Page |
| POST   | /expenses/edit/:id   | Update Expense    |
| POST   | /expenses/delete/:id | Delete Expense    |

---

## Security Features

- Password Hashing using bcryptjs
- Session-based Authentication
- Protected Routes using Middleware
- User-specific Expense Access
- Unauthorized Access Prevention

---

## Future Improvements

- Expense Categories
- Expense Search & Filters
- Monthly Reports
- Data Visualization with Charts
- Budget Tracking
- Income Tracking
- Export Expenses to PDF
- Dark Mode
- REST API Version
- MERN Stack Frontend using React

---

## Author

Rishav Rajput

Built as a learning project to practice:

- Backend Development
- Authentication
- Session Management
- MongoDB Relationships
- MVC Architecture
- CRUD Operations
- Full Stack Development Concepts
