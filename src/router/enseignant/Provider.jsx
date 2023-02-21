import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Calendar from "./routes/Calendar";
import Root from "./routes/Root";
import Navbar from "../../components/Navbar/NavBarEnseignant";
import NewGroupe from "./routes/NewGroupe";
import Groupe from "./routes/Groupe";
import EditGroupe from "./routes/EditGroupe";
import CreateEvent from "./routes/CreateEvent.jsx";
import Evenement from "./routes/Evenement.jsx";
import EditEvenement from "./routes/EditEvenement.jsx";
import EditEvent from "./routes/EditEvenement.jsx";

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
        {
          path: "/add/evenement",
          element: <CreateEvent />,
        },
        {
          path: "/evenement",
          element: <Evenement />,
        },
        {
          path: "/edit/evenement/:idEvenement",
          element: <EditEvent />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Provider;
