
import React from "react";
import "./App.css";
import Provider from "./Context/Provider";
import EventAdd from "./components/NewEvenement.jsx";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Provider />
    </div>

  );
}

export default App;

