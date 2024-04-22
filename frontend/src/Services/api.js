import API from "./apiConfig";

//Fect All Exercises

export const fetchExercises = () => API.get("/exercises");

//User Login
export const loginUser = (userData) => API.post("/users/login", userData);

//User Signup
export const signupUser = (userData) => API.post("/users/signup", userData);
