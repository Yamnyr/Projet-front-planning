import React, { useEffect, useState } from "react";

export default function Groupe({
  groupe,
  setListUserChecked,
  ListUserChecked,
}) {
  const [listGroupe, setListGroupe] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const d = groupe.utilisateurs.map((u) => (
      <div className="item" key={u.id}>
        <div>
          {u.nom_utilisateur} {u.prenom_utilisateur}
        </div>
        <input
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setListUserChecked(u.id);
            }
          }}
        />
      </div>
    ));
    setListGroupe(d);
  }, [groupe, setListUserChecked]);

  return (
    <div className="item-groupe">
      <div className="info">
        <div className="item-groupe-name">{groupe.lib_groupe}</div>
        {groupe.utilisateurs.length > 0 ? (
          <button
            type="button"
            className="item-groupe-"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? "-" : "+"}
          </button>
        ) : (
          ""
        )}
      </div>
      <div className={`members ${open ? "open" : ""}`}>{listGroupe}</div>
    </div>
  );
}

Groupe.defaultProps = {
  groupe: {},
  setListUserChecked: () => {},
  ListUserChecked: [],
};
