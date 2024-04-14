import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Exercises from "./pages/exercises";

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
  ]);

  return <RouterProvider router={router} />;
};

export default App;
