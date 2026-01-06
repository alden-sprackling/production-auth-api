# Production Auth API

A production-style backend API built with Node.js, Express, and PostgreSQL.  
This project demonstrates authentication, role-based access control, and rate limiting in a clean, minimal service.

---

## Features

- User registration and login
- Password hashing with bcrypt
- JWT-based authentication
- Role-based access control (user vs admin)
- Rate limiting on authentication endpoints
- PostgreSQL-backed persistence

---

## Architecture

- **API Layer:** Express.js REST endpoints
- **Auth:** JWT tokens issued on login and validated via middleware
- **Database:** PostgreSQL for user persistence
- **Security:** Password hashing, role checks, and rate limiting
- **Structure:** Middleware-driven request pipeline

---

## API Endpoints

### Auth
- `POST /auth/register`
- `POST /auth/login`

### Users
- `GET /users/me` — authenticated user
- `GET /admin/users` — admin only

---

## Database Schema

Users table includes:
- id
- email
- password_hash
- role
- created_at

---

## Running Locally

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
