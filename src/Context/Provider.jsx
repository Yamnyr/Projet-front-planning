import React, { useEffect } from "react";

import ProviderEnseignant from "../router/enseignant/Provider";
import ProviderEleve from "../router/eleve/Provider";
import UserContext from "./index";
import Login from "../components/Authentication";

function provider() {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("username", data.username);
      })
      .catch(() => localStorage.clear());
  }, []);

  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  if (!localStorage.getItem("token")) {
    return (
      <div className="Outlet">
        <Login />
      </div>
    );
  }

  const userData = {
    token: localStorage.getItem("token"),
    userId: localStorage.getItem("userId"),
    username: localStorage.getItem("username"),
  };

  const roles = localStorage.getItem("roles");
  return (
    <UserContext.Provider value={{ userData, logout }}>
      {roles.includes("ROLE_ADMINISTRATEUR") ||
      roles.includes("ROLE_PROFESSEUR") ? (
        <ProviderEnseignant />
      ) : (
        <ProviderEleve />
      )}
    </UserContext.Provider>
  );
}

export default provider;
