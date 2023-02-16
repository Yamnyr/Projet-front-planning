import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useState } from "react";

function Group({ name, color, handleChange }) {
  const [checked, setChecked] = useState(true);
  const handleChecked = () => {
    handleChange(name, !checked);
    setChecked(!checked);
  };
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
              color,
              "&.Mui-checked": {
                color,
              },
            }}
            checked={checked}
            onChange={() => handleChecked()}
          />
        }
        label={name}
      />
    </div>
  );
}

export default Group;
