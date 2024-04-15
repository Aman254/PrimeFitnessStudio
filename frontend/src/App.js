import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Exercises from "./pages/exercises";
import Carousel from "./components/Carousel";

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
      path: "/carousel",
      element: <Carousel />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
