import React, { useEffect, useState } from "react";
import { fetchAllGroupes } from "../services/api/groupeApi";

function Groupe() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalGroup, setModalGroup] = useState({});
  const [groupesList, setGroupesList] = useState([]);

  useEffect(() => {
    fetchAllGroupes().then((response) => {
      setGroupesList(response["hydra:member"]);
    });
  }, [groupesList]);

  const handleGroupClick = (group) => {
    setModalOpen(true);
    setModalGroup(group);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        Liste des groupes
      </h1>
      <hr style={{ width: 400 }} />
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        {groupesList.map((group) => (
          <div key={group.lib_groupe} style={{backgroundColor: group.color, borderRadius: "10px", padding: "20px", margin: "10px", width: "50%", boxShadow: "0px 3px 3px #ccc", transition: "all 0.3s ease-in-out", textAlign: "center"}} onClick={() => handleGroupClick(group)}
               onMouseEnter={(e) => e.currentTarget.style.transform ="scale(1.1)"}
               onMouseLeave={(e) => e.currentTarget.style.transform ="scale(1)"}
          >
            <span style={{ color: "white" }}>{group.lib_groupe}</span>
            <i className="fas fa-info-circle" style={{ cursor: "pointer" }}></i>
          </div>
        ))}
      </div>
      {modalOpen &&
        <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{backgroundColor: "white", padding: "20px", borderRadius: "10px"}}>
            <h2>{modalGroup.lib_groupe}</h2>
            <p>{modalGroup.desc_groupe}</p>
            <button onClick={handleModalClose}>Fermer</button>
          </div>
        </div>
      }
    </div>
  );
}

export default Groupe;
