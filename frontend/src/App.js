import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Errormessage from "./components/Errormessage";
import Exercises from "./pages/exercises";
import Viewdetails from "./pages/Viewdetails";
import { ExerciseProvider } from "./Context/Exercisecontext"; // Import the context provider

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/home",
      element: <Homepage />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/membership",
      element: <Membership />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/exercises",
      element: <Exercises />,
    },
    {
      path: "/modal",
      element: <Errormessage />,
    },
    {
      path: "/exercises/exercisemodal",
      element: <Viewdetails />,
    },
  ]);

  // Wrap the RouterProvider with ExerciseProvider
  return (
    <ExerciseProvider>
      <RouterProvider router={router} />
    </ExerciseProvider>
  );
};

export default App;
