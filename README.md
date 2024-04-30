# Prime Fitness Gym Website

Welcome to the Prime Fitness Gym Website repository! This repository contains the codebase for our gym's website.

## Project Setup

### Cloning the Project

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd backend
npm install
```

#### Backend Configuration

Create a file named `config.env` in the `backend` folder and add the following environment variables:

```
PORT=5000
DATABASE=<YOUR_MONGODB_URI>
JWT_SECRET=<YOUR_JWT_SECRET>
JWT_EXPIRES_IN=90d
```

### Frontend Setup

```bash
cd frontend
npm install
```

#### Frontend Configuration

Create a file named `.env` in the root of the `frontend` folder and add the following environment variable:

```
REACT_APP_API_URL=http://localhost:5000/api/v1
```
#### Import Development Data

In the backend folder, navigate to the data folder and run the following command:

```bash
cd backend/Data/data
node import-dev-data.js
```

## Usage
Once you've set up the project, you can run the backend and frontend servers:

### Run Backend Server

```bash
cd backend
npm start
```

### Run Frontend Server

```bash
cd frontend
npm start
```

