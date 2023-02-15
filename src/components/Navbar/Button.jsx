import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Button({ icon, text, link }) {
  return (
    <div className="btn-item">
      <FontAwesomeIcon icon={icon} style={{ marginRight: "5px" }} />
      <div className="group-title">
        <Link to={`/${link}`} className="text-navBar">
          {text}
        </Link>
      </div>
    </div>
  );
}
