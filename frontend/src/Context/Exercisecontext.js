import React, { createContext, useContext, useState } from "react";

const ExerciseContext = createContext();

export const useExercise = () => useContext(ExerciseContext);

export const ExerciseProvider = ({ children }) => {
  const [selectedBodyPart, setSelectedBodyPart] = useState("");

  const setBodyPart = (bodyPart) => {
    setSelectedBodyPart(bodyPart);
  };

  return (
    <ExerciseContext.Provider value={{ selectedBodyPart, setBodyPart }}>
      {children}
    </ExerciseContext.Provider>
  );
};
