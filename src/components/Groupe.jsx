import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllGroupes } from "../services/api/groupeApi";

function Groupe() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalGroup, setModalGroup] = useState({});
  const [groupesList, setGroupesList] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredGroupes = groupesList.filter((group) =>
    group.lib_groupe.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchAllGroupes({ q: search }).then((response) => {
      setGroupesList(response["hydra:member"]);
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        Liste des groupes
      </h1>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Recherche par nom de groupe"
            value={search}
            onChange={handleSearchChange}
            style={{
              marginBottom: "20px",
              width: 300,
              height: 45,
              boxShadow: "initial",
            }}
          />
        </form>
      </div>
      <hr style={{ width: 400 }} />
      <div>
        {filteredGroupes.length === 0 && (
          <p style={{ textAlign: "center", color: "red" }}>
            Aucun résultat trouvé pour "{search}"
          </p>
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {filteredGroupes.map((group) => (
          <div
            key={group.lib_groupe}
            style={{
              backgroundColor: group.color,
              borderRadius: "10px",
              padding: "20px",
              margin: "10px",
              width: "50%",
              boxShadow: "0px 3px 3px #ccc",
              transition: "all 0.3s ease-in-out",
              textAlign: "center",
            }}
            onClick={() => handleGroupClick(group)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <span style={{ color: "white" }}>{group.lib_groupe}</span>
            <i className="fas fa-info-circle" style={{ cursor: "pointer" }} />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>{modalGroup.lib_groupe}</h2>
            <p>{modalGroup.desc_groupe}</p>
            {modalGroup.utilisateurs && modalGroup.utilisateurs.length > 0 && (
              <>
                <h3>Nom et prénom des élèves :</h3>
                <ul>
                  {modalGroup.utilisateurs.map((user) => (
                    <li key={user.id}>
                      {user.prenom_utilisateur} {user.nom_utilisateur}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <button onClick={handleModalClose}>Fermer</button>
            <Link to={`/edit/groupe/${modalGroup.id}`} className="text-navBar">
              <button style={{ marginLeft: "20px" }} onClick="#">
                Modifier
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Groupe;
