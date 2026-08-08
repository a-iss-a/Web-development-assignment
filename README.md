# Task Tracker

Task Tracker is a web application built with React and TypeScript that allows users to create, view, edit, delete, and filter tasks. The application uses an ASP.NET Core Web API as its backend and SQL Server for data persistence.

The assignment originally required using localStorage, but I decided to use a backend instead, as this approach was allowed by the instructor. This allowed us to integrate the React frontend with our existing Web API and SQL Server database.


# Features:
- View tasks
- Add new tasks
- Edit tasks
- Delete tasks
- Mark tasks as Completed or Incomplete
- Filter tasks by: All, Completed, Incomplete
- Responsive user interface

# Project Structure:

## src:
- App.tsx
- TaskApi.tsx
- TaskList.tsx
- TaskForm.tsx
- EditTask.tsx
- main.tsx

# Installation:
- npm create vite@latest task-tracker

## Libraries installed:
- npm install react-router-dom
- npm install react-bootstrap bootstrap


# Running the Application:
Start the backend ASP.NET Core Web API first, then start the React frontend using:

- npm run dev

The frontend communicates with the backend through:
http://localhost:5008/api/data


The backend uses SQL Server to store and manage the tasks.

# Technologies Used:
- React
- TypeScript
- Vite
- React Router
- React Bootstrap
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server

# Pushing the project to git repositroy:
- git init
- git add . 
- git commit -m "Add assignment to repository"
- git branch -M main
- git remote add origin https://github.com/a-iss-a/Web-development-assignment.git
- git push -u origin main
