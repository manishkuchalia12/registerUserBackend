# Volunteer/Intern Registration Backend

This is a basic backend project for registering users (volunteers or interns) and viewing a list of all registered users.

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Postman (for API testing)**

---

## 📦 Features

- ✅ Register a user (volunteer or intern)
- 🔒 Admin-only endpoint to view all registered users
- 🧪 Well-documented Postman collection included

---
Postman API Docs
I'll also create a Postman collection and send you a downloadable .json file you can import in Postman. Here's what it will include:

POST /api/users/register – Register intern/volunteer
GET /api/users – View all users
----

## 🚀 Getting Started

### 1. Clone the repository

```bash

🟩 1. Register User (POST /api/users/register)
Request:
Method: POST
URL: http://localhost:Port/api/users/register
Headers: Content-Type: application/json
Body (raw JSON):

json

{
  "name": "Anjali Sharma",
  "email": "anjali@example.com",
  "role": "volunteer"
}
📸 Response:
json
{
   "_id": "64f2c1e7b9d47a1a92a44f1c",
  "name": "Anjali Sharma",
  "email": "anjali@example.com",
  "role": "volunteer",
  "__v": 0
}
 2. Get All Users (GET /api/users)
Request:
Method: GET
URL: http://localhost:5000/api/users
Headers:
x-admin: true
{
  "_id": "64f2c1e7b9d47a1a92a44f1c",
  "name": "Anjali Sharma",
  "email": "anjali@example.com",
  "role": "volunteer",
  "__v": 0
}
{
  "_id": "64f2c1e7b9d47a1a92a44f1d",
  "name": "Ravi Mehta",
  "email": "ravi@example.com",
  "role": "intern",
  "__v": 0
}

[git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name](https://github.com/manishkuchalia12/registerUserBackend.git)
