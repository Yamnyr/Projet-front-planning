import FormGroup from "@mui/material/FormGroup";
import React from "react";
import Group from "./Group";

function Groups() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "3vw",
        padding: "0.5vw",
        border: "0.5px solid",
      }}
    >
      <span
        style={{
          borderBottom: "0.5px solid",
        }}
      >
        Vos groupes
      </span>
      <FormGroup>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Group />
        </div>
      </FormGroup>
    </div>
  );
}

export default Groups;
