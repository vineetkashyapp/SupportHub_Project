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

## Screenshots  
### Login Page
<img width="1917" height="911" alt="image" src="https://github.com/user-attachments/assets/112f07a4-3e78-4d17-a7dd-a9eae9784201" />

### Dashboard
<img width="1917" height="910" alt="image" src="https://github.com/user-attachments/assets/63089318-9fbe-4a35-aaf8-72e7fa6e0a3a" />

### Create Ticket
<img width="1917" height="902" alt="image" src="https://github.com/user-attachments/assets/a5a4a7db-019b-41bf-b659-8e6437e8ea97" />

### My Tickets
<img width="1917" height="912" alt="image" src="https://github.com/user-attachments/assets/a794093d-42af-413b-99cd-8b25829284cc" />



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
```
## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/vineetkashyapp/SupportHub_Project.git
cd SupportHub_Project
```

### 2. Set up the MySQL database
```bash
CREATE DATABASE supporthub;
```

### 3. Run the Backend
```bash
cd supporthub
```

Set your MySQL password:
```bash
$env:DB_PASSWORD="your_mysql_password"
```

Start the Spring Boot application:
```bash
.\mvnw spring-boot:run
```

The backend will run on: http://localhost:8080

### 4. Run the Frontend

Open another terminal:
```bash
cd supporthub-frontend
```

Install dependencies:
```bash
npm install
```

Start the React development server:
```bash
npm run dev
```

The frontend will normally run on: http://localhost:5173

## Future Improvements

- Role-based access for employees and support agents
- Secure password hashing
- JWT-based authentication
- Dynamic employee/agent management
- Email notifications
- Search and filtering
- Ticket comments and attachments
- Production deployment

## Author

Vineet Kashyap  

B.Tech – Information Technology  
Narula Institute of Technology  
GitHub: https://github.com/vineetkashyapp  
LinkdIn: https://www.linkedin.com/in/vineet-kashyap-6481b7292/?isSelfProfile=true  
