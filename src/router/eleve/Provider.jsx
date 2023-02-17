import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./routes/Calendar";
import Root from "./routes/Root";
import Navbar from "../../components/Navbar/NavBarEleve";
import Login from "./routes/Login.jsx";

function Provider() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Root />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Calendar />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Provider;
