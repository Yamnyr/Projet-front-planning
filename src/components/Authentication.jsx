function Authentication() {
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
            <form className="form-connect">
              <label className="text-connect-label">URCA Username</label>
              <br />
              <input className="input-connect" type="text" name="username" />
              <br />
              <label className="text-connect-label">Password</label>
              <br />
              <input
                className="input-connect"
                type="password"
                name="password"
              />
              <br />
              <input className="input-radio" type="radio" name="radio" />
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
