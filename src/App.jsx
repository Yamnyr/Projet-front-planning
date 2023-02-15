
import React from "react";
import "./App.css";
import Provider from "./Context/Provider";
import EventAdd from "./components/EventAdd.jsx";

function App() {
  return (
    <div style={{ height: "100%" }}>
      {/*<Provider />*/}
        <EventAdd></EventAdd>
    </div>

  );
}

export default App;
