import React, { useState } from "react";
import axios from "axios";

function Authentication() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      "Content-Type": "application/json",
    },
  });

  function login(username, password) {
    api
      .post("/api/login", {
        username,
        password,
      })
      .then((response) => {
        // if login is successful
        if (response.data.token) {
          setToken(response.data.token);
          localStorage.setItem("jwtToken", response.data.token);
          api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          console.log("Connexion réussie");
        }
      })
      .catch((error) => {
        console.log("Connexion erreur");
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(username, password);
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
