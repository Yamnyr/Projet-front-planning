import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./routes/Calendar";
import Root from "./routes/Root";
import Navbar from "../../components/Navbar/NavBarEnseignant";
import NewGroupe from "./routes/NewGroupe";
import Groupe from "./routes/Groupe";
import EditGroupe from "./routes/EditGroupe";

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
        {
          path: "/add/groupe",
          element: <NewGroupe />,
        },
        {
          path: "/groupes",
          element: <Groupe />,
        },
        {
          path: "/edit/groupe/:idgroupe",
          element: <EditGroupe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Provider;
