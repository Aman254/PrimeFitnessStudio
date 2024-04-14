import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

//Fect All Exercises

export const fetchExercises = () => API.get("/exercises");

//User Login
export const loginUser = (userData) => API.post("/users/login", userData);
