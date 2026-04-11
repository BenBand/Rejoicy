# Rejoicy - Counselling Services Web Application

A full-stack counselling web application with PostgreSQL database integration, built with Node.js and Express.

## Features

- User registration and authentication
- Dynamic counselling topics and resources loaded from database
- Category-based resource filtering
- Ask questions functionality for users
- Responsive design

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: bcrypt for password hashing

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)

## Installation

1. **Install Node.js dependencies**:
   ```
   npm install
   ```

2. **Configure PostgreSQL**:
   - Install PostgreSQL if not already installed
   - Create a new database named `rejoicy_counselling`
   - Update the `.env` file with your PostgreSQL credentials:
     ```
     DB_USER=your_postgres_username
     DB_PASSWORD=your_postgres_password
     DB_NAME=rejoicy_counselling
     ```

3. **Start the server**:
   ```
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to: `http://localhost:3000`

## Database Schema

The application automatically creates the following tables:
- `users` - User accounts
- `categories` - Counselling topics (peer pressure, stress, abuse, addiction, etc.)
- `resources` - Counselling materials and resources
- `questions` - User-submitted questions

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Register a new user |
| POST | `/api/login` | User login |
| GET | `/api/categories` | Get all counselling categories |
| GET | `/api/resources` | Get all resources |
| GET | `/api/resources/:category` | Get resources by category |
| POST | `/api/questions` | Submit a question |
| GET | `/api/questions` | Get all questions (admin) |

## Project Structure

```
├── config/
│   ├── database.js       # PostgreSQL connection
│   └── db-setup.js       # Database initialization
├── images/               # Static images
├── config/               # Configuration files
├── .env                  # Environment variables
├── server.js             # Express server
├── package.json          # Dependencies
├── counselling.html      # Main page
├── login.html            # Login page
├── register.html         # Registration page
├── main.css              # Styles
└── script.js             # Client-side scripts
```

## Default Categories

The database is pre-populated with these counselling topics:
- PEER PRESSURE
- STRESS
- ABUSE
- ADDICTION
- BULLYING
- ACADEMIC
- MENTAL HEALTH

## Notes

- The database tables are created automatically on first server start
- Default resources are seeded into the database
- Passwords are securely hashed using bcrypt