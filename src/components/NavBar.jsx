import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="logo.png" alt="logo" className="logo"/>
        <div className="navbar-text">
          <FontAwesomeIcon icon={faUsers} style={{ marginRight: "5px" }} />
          <div className="group-title">
            <a href="#">Les groupes</a>
          </div>
        </div>
      </div>
      <div className="group-title">
        <p className="navbar-text">Planning événementiel</p>
      </div>
      <div className="navbar-right">
        <div className="navbar-text">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
          <div className="group-title">
            <a href="#">Bonjour User</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;