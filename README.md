# Workout Buddy Project

This repository contains the code for the Workout Buddy project, a web application that allows users to track their workouts. The project is divided into two main parts: the backend and the frontend.

## Table of Contents
* [Backend](#backend)
* [Frontend](#frontend)
* [Getting Started](#getting-started)

## Backend
The backend of the project is built using Node.js, Express, and MongoDB. It provides a RESTful API for managing user accounts and workout data. The main files and directories in the backend are:

* `backend/server.js`: This file contains the main server setup, including the Express application, middleware configurations, and routes for handling user authentication and workout data.

* `backend/routes`: This directory contains the route handlers for user authentication (`user.js`) and workout data (`workouts.js`).

* `backend/models`: This directory contains the Mongoose models for the User and Workout schemas.

* `backend/middleware`: This directory contains the authentication middleware (`requireAuth.js`) that ensures user authentication for protected routes.

* `backend/controllers`: This directory contains the controller functions for handling user authentication (`userController.js`) and workout data (`workoutController.js`).

* `backend/package.json`: This file includes the project's dependencies and npm scripts for running the server in development (`dev`) and production (`start`) modes.

## Frontend
The frontend of the project is a React application that consumes the backend API. It allows users to log in, sign up, view their workout history, and add new workouts. The main files and directories in the frontend are:

* `frontend/src`: This directory contains the React components, hooks, and context providers for the application.

    * `frontend/src/index.js`: The entry point for the React application, where context providers are wrapped around the main `App` component.

    * `frontend/src/App.js`: The main component that defines the application's routes using React Router. It includes the `Navbar` component for navigation.

    * `frontend/src/components`: This directory contains reusable React components, including the `Navbar`, `WorkoutDetails`, and `WorkoutForm`.

    * `frontend/src/hooks`: This directory contains custom hooks for managing authentication (`useAuthContext`, `useLogin`, `useLogout`, `useSignup`) and workout data (`useWorkoutsContext`).

    * `frontend/src/pages`: This directory contains React components for different pages of the application, such as the `Home`, `Login`, and `Signup` pages.

* `frontend/package.json`: This file includes the project's dependencies and npm scripts for building and running the React application.

## Getting Started
To run the project locally, follow these steps:

1. Clone the repository: git clone https://github.com/ChrisBooth360/mern-workout-app.git
2. Navigate to the backend directory: cd backend
3. Install backend dependencies: npm install
4. Create a .env file in the backend directory and set the MONGO_URI and SECRET variables.
5. Run the backend server: npm run dev
6. In a new terminal, navigate to the frontend directory: cd frontend
7. Install frontend dependencies: npm install
8. Run the frontend application: npm start

Visit `http://localhost:3000` in your browser to access the Workout Buddy application.

Feel free to explore the code and customize it for your own use. If you encounter any issues or have questions, please refer to the documentation of the technologies used or open an issue in the repository. Happy coding!