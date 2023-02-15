import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React from "react";

function Group({ name, color }) {
  return (
    <div
      style={{
        borderBottom: "0.1px solid",
        marginTop: "0.5vh",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              color: "#ba4931",
              "&.Mui-checked": {
                color: "#ba4931",
              },
            }}
            defaultChecked
          />
        }
        label="Groupe 1"
      />
    </div>
  );
}

export default Group;
