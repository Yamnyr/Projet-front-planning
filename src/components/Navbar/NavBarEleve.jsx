import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

import UserContext from "../../Context/index";
import Button from "./Button";

function NavBar() {
  const [isLoading, setIsLoading] = useState(true);
  const { userData, logout } = React.useContext(UserContext);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <nav className={`navbar ${isLoading ? "loading" : ""}`}>
      <div className="group-title">
        <p className="navbar-text">Planning événementiel</p>
      </div>
      <div className="navbar-btn">
        <div className="size-right-btn">
          <Button icon={faUser} text={`Bonjour ${userData.username}`} />
          <a
            href="#"
            className="logout-btn"
            onClick={() => {
              logout();
            }}
          >
            Deconnexion
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
