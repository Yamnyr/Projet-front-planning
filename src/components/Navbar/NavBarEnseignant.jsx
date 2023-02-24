import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/index";

function NavBar() {
  const [isLoading, setIsLoading] = useState(true);
  const { userData, logout } = React.useContext(UserContext);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Planning
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link nav-link d-flex flex-row bd-highlight"
                aria-current="page"
                href="#"
              >
                <Link to="/" className="text-navBar">
                  Accueil
                </Link>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                  className="nav-link dropdown-toggle d-flex flex-row bd-highlight"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                Groupes
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/groupes" className="text-navBar">
                    <a className="dropdown-item" href="#">
                      Voir
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/add/groupe" className="text-navBar">
                    <a className="dropdown-item" href="#">
                      Creer un groupe
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                  className="nav-link dropdown-toggle d-flex flex-row bd-highlight"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
              >
                Evènements
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/evenement" className="text-navBar">
                    <a className="dropdown-item" href="#">
                      Voir
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/add/evenement" className="text-navBar">
                    <a className="dropdown-item" href="#">
                      Creer un évènement
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            {/*<li className="nav-item">
              <a
                className="nav-link nav-link d-flex flex-row bd-highlight"
                aria-current="page"
                href="#"
              >
                <Link to="/add/evenement" className="text-navBar">
                  Creer un evenement
                </Link>
              </a>
            </li>*/}
          </ul>
          <form className="d-flex align-middle">
            <div className="d-flex flex-column gap-1">
              <Link to="/" className="text-navBar">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    logout();
                  }}
                  type="submit"
                >
                  Deconnexion
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
