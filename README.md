# SupportHub – Employee Support Ticket Management System

SupportHub is a full-stack employee support ticket management system designed to help employees create, track, prioritize, and manage workplace support requests.

The project consists of a React.js frontend and a Java Spring Boot backend connected to a MySQL database.

## Features

- Employee login
- Create support tickets
- View all support tickets
- View tickets in the "My Tickets" section
- Update ticket status
- Set ticket priority
- Assign tickets to employees
- Dashboard with ticket statistics
- Delete resolved tickets
- REST API-based backend
- Persistent data storage using MySQL

## Technologies Used

### Frontend

- React.js
- JavaScript
- Vite
- HTML
- CSS

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs
- Maven

### Database

- MySQL

### Tools

- Git
- GitHub
- Visual Studio Code

## Project Structure

```text
SupportHub_Project/
│
├── supporthub/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   └── mvnw
│
├── supporthub-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md

## How to Run the Project

1. Clone the repository

git clone https://github.com/vineetkashyapp/SupportHub_Project.git
cd SupportHub_Project

2. Set up the MySQL database

CREATE DATABASE supporthub;

3. Run the Backend
cd supporthub

Set your MySQL password:
$env:DB_PASSWORD="your_mysql_password"

Start the Spring Boot application:
.\mvnw spring-boot:run

The backend will run on: http://localhost:8080

4. Run the Frontend

Open another terminal:
cd supporthub-frontend

Install dependencies:
npm install

Start the React development server:
npm run dev

The frontend will normally run on: http://localhost:5173

## Future Improvements
Possible future enhancements include:

Role-based access for employees and support agents
Secure password hashing
JWT-based authentication
Dynamic employee/agent management
Email notifications
Search and filtering
Ticket comments and attachments
Production deployment

Author

Vineet Kashyap

B.Tech – Information Technology
Narula Institute of Technology
GitHub: 
LinkdIn: 