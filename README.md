# DailyRounds


 # DailyRounds
 



 # 📝 Fullstack Todo List Application

This is a Fullstack Todo List Application built as part of the SDE 1 assessment. The app allows users to manage todos with tags, priorities, and user mentions. It supports pagination, filtering, sorting, and user-specific features.

---

## 🚀 Tech Stack

 
- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose ODM)

---

## 📁 Folder Structure

root/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── index.js
│ └── ...
 
└── README.md

 

---

## ⚙️ Setup Instructions

### 🔧 Backend

```bash
cd backend
npm install
npm run dev
Make sure MongoDB is running locally on PORT : 2026.

 
✅ Features Implemented
Create, edit, delete todos

Add tags, priority, and assigned users

Add notes to todos

View detailed todo info

Pagination (limit + skip)

Sorting by creation date / priority

Filter by tag, priority, or assigned users

Fetch todos specific to the user (auth simulated)

CORS enabled for frontend/backend communication

🧪 APIs
GET /api/todos
Supports: ?page, ?limit, ?assignedUser, ?priority, ?tag

GET /api/todos/:id
Single  todo with objectid

POST /api/todos
Create a new todo

PUT /api/todos/:id
Update a todo

PATCH /api/todos/:id/notes
Update update the notes with their object id
DELETE /api/todos/:id
Delete a todo

🔐 Authentication
For this project, we simulated user selection without full JWT-based auth. Predefined users are loaded from the backend for assigning todos.

📦 Improvements Possible
Implement full JWT authentication

Add CSV/JSON export of todos

Add unit & integration tests

Enable real-time updates with sockets

Responsive mobile-first design

👨‍💻 Author
Prince Kumar Yadav
princesinghyadav017@gmail.com
8102047371

📜 License
This project is for assessment purposes only.


