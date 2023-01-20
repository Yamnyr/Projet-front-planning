import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav style={{ backgroundColor: "#42BDF0", height: 100, alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="logo.png" alt="logo" />
        <div style={{ display: "flex", alignItems: "center"}}>
          <FontAwesomeIcon icon={faUsers} style={{ marginRight: "5px" }} />
          <h1 style={{ color: "white", fontSize: 25 }}>Les groupes</h1>
        </div>
        <h1 style={{ color: "white", fontSize: 40, flex: 1, textAlign: 'center' }}>Planning événementiel</h1>
        <div style={{ display: "flex", alignItems: "center", marginRight: 20 }}>
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
          <h1 style={{ color: "white", fontSize: 25, marginLeft: "10px" }}>
            Bonjour User
          </h1>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
