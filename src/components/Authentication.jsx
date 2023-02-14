import jwt_decode from "jwt-decode";
import React, { useState } from "react";
import { login } from "../services/api/authentification";

function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    login({ username, password }).then((response) => {
      const decodedToken = jwt_decode(response.token);
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.data.id);
      localStorage.setItem("username", decodedToken.username);
      localStorage.setItem("roles", decodedToken.roles);
      window.location.reload();
    });
  }
  return (
    <div className="container">
      <div className="left-column">
        <div className="box-img">
          <img src="/public/iut.jpg" />
        </div>
      </div>
      <div className="right-column" style={{ backgroundColor: `#0A3054` }}>
        <div className="box-form">
          <h1 className="text-connect">Connexion</h1>
          <div className="block-connect">
            <form className="form-connect" onSubmit={handleSubmit}>
              <label className="text-connect-label">URCA Username</label>
              <br />
              <input
                className="input-connect"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <label className="text-connect-label">Password</label>
              <br />
              <input
                className="input-connect"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input className="input-radio" type="checkbox" name="remember" />
              <label>Remember me</label>
              <br />
              <button
                className="button-connect"
                type="submit"
                value="Se connecter"
              >
                Sign me
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
