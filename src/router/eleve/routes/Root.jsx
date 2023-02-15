import React from "react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="Outlet" style={{ height: "100%" }}>
      <Outlet />
    </div>
  );
}

export default Root;
