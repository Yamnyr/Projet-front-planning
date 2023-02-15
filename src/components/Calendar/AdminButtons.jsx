import { IconButton } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import TodayIcon from "@mui/icons-material/Today";
import React from "react";

function AdminButtons() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "3vh",
      }}
    >
      <IconButton color="primary" size="medium">
        <GroupsIcon />
        Créer un groupe
      </IconButton>
      <IconButton color="primary" size="medium">
        <TodayIcon />
        Créer un événement
      </IconButton>
    </div>
  );
}

export default AdminButtons;
