import API from "./apiConfig";

//Fect All Exercises

export const fetchExercises = async (bodyPart) => {
  if (bodyPart) {
    try {
      const response = await API.get(`/exercises?bodyPart=${bodyPart}`);
      if (response.data && response.data.status === "Sucess") {
        return response.data;
      } else {
        console.error("Error in Fetching Data", response.data.status);
        return { Status: "Error,", message: "Failed to fecth Exercises" };
      }
    } catch (error) {
      console.error("Error in Fetching Exercises", error);
      return { Status: "Error", message: "Failed to" };
    }
  } else {
    try {
      const response = await API.get("/exercises");
      if (response.data && response.data.status === "Sucess") {
        return response.data;
      } else {
        console.error("Error in Fetching Data", response.data.status);
        return { Status: "Error,", message: "Failed to fecth Exercises" };
      }
    } catch (error) {
      console.error("Error in Fetching Exercises", error);
      return { Status: "Error", message: "Failed to" };
    }
  }
};

//User Login
export const loginUser = (userData) => API.post("/users/login", userData);

//User Signup
export const signupUser = (userData) => API.post("/users/signup", userData);
