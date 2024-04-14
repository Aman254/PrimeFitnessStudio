import React, { useEffect, useState } from "react";
import { fetchExercises } from "../Services/api";

const Exercises = () => {
  const [Exercise, setExercise] = useState([]);
  useEffect(() => {
    fetchExercises()
      .then((response) => {
        setExercise(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(Exercise);
  return (
    <div className="text-white">
      <h1>Aman</h1>
    </div>
  );
};

export default Exercises;
