import FormGroup from "@mui/material/FormGroup";
import React, { useEffect, useState } from "react";
import Group from "./Group";

function Groups({ groups, updateGroups }) {
  const [activeGroups, setActiveGroups] = useState([]);

  useEffect(() => {
    setActiveGroups(groups);
    console.log("groups", groups);
  }, [groups]);
  const handleGroupChange = (groupName, isChecked) => {
    if (!isChecked) {
      setActiveGroups(
        activeGroups.filter((item) => item.lib_groupe !== groupName)
      );
      updateGroups(
        activeGroups.filter((item) => item.lib_groupe !== groupName)
      );
    } else {
      const groupsCopy = groups;
      const objectToAdd = groupsCopy.find(
        (item) => item.lib_groupe === groupName
      );

      if (objectToAdd) {
        setActiveGroups([...activeGroups, objectToAdd]);
        updateGroups([...activeGroups, objectToAdd]);
      }
    }
  };
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
          {groups.map((group) => (
            <Group
              name={group.lib_groupe}
              color={group.color}
              handleChange={handleGroupChange}
            />
          ))}
        </div>
      </FormGroup>
    </div>
  );
}

export default Groups;
