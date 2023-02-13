import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUsers,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isLoading, setIsLoading] = React.useState(true);

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
      <div className="navbar-left">
        <div className="navbar-text">
          <FontAwesomeIcon icon={faUsers} style={{ marginRight: "5px" }} />
          <div className="group-title">
            <a className="text-navBar" href="#">Les groupes</a>
          </div>
          <div className="navbar-text">
            <FontAwesomeIcon
              icon={faCalendarDay}
              style={{ marginRight: "5px" }}
            />
            <div className="group-title">
              <a className="text-navBar" href="#">
                Créer un événement
              </a>
            </div>
          </div>
          <div className="navbar-text">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
            <div className="group-title">
              <a className="text-navBar" href="#">Bonjour User</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;