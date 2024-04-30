<div align='center'>
  <p>A Gym Website for Workouts</p>
  <h4>
    <span> · </span>
    <a href="https://github.com/Aman254/PrimeFitnessStudio/blob/master/README.md">Documentation</a>
    <span> · </span>
    <a href="https://github.com/Aman254/PrimeFitnessStudio/issues">Report Bug</a>
    <span> · </span>
    <a href="https://github.com/Aman254/PrimeFitnessStudio/issues">Request Feature</a>
  </h4>
</div>

---

## Project Setup

### Cloning the Project

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


