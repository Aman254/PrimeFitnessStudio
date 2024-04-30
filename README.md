Prime Fitness Gym Website
Welcome to the Prime Fitness Gym Website repository! This repository contains the codebase for our gym's website.

Project Setup

Cloning the Project
git clone <repository-url>

Backend Setup
cd backend
npm install

Backend Configuration
Create a file named .env in the backend folder and add the following environment variables:
PORT=5000
DATABASE=<YOUR_MONGODB_URI>
JWT_SECRET=<YOUR_JWT_SECRET>
JWT_EXPIRES_IN=90d

Frontend Setup
cd frontend
npm install
Frontend Configuration
Create a file named .env in the root of the frontend folder and add the following environment variable:


REACT_APP_API_URL=http://localhost:5000/api/v1
Usage
Once you've set up the project, you can run the backend and frontend servers:

Run Backend Server
cd backend
npm start

Run Frontend Server
cd frontend
npm start
