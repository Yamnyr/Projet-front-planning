import React, { useEffect, useState } from "react";

import Groupe from "./newGroupe/Groupe";
import useNewGroupe from "../hooks/useNewGroupe";

export default function Newgroupe() {
  // data groupe
  const [libgroupe, setLibgroupe] = useState(); // libelle du groupe
  const [descriptiongroupe, setDescriptiongroupe] = useState(); // description du groupe
  const [datecreation] = useState(new Date()); // date creation
  const [GroupeParent, setGroupeParent] = useState(); // id du groupe parent
  const [couleurgroupe, setCouleurgroupe] = useState(); // couleur du groupe

  const { ListGroupe, listOptions, submitGroupe } = useNewGroupe();

  return (
    <div className="container-main">
      <div className="newGroupe-container">
        <div className="info-groupe">
          <div className="size">
            <div>
              <span>Libelle du groupe :</span>
              <input
                type="text"
                onChange={(e) => {
                  setLibgroupe(e.target.value);
                }}
              />
            </div>
            <div>
              <span>Description Groupe :</span>
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                onChange={(e) => {
                  setDescriptiongroupe(e.target.value);
                }}
              />
            </div>
          </div>
          <hr />

          <div className="size">
            <div>
              <span>Date creation :</span>
              <input type="text" disabled value={new Date().toUTCString()} />
            </div>
            <div>
              <span>Date creation :</span>
              <input
                type="color"
                onChange={(e) => {
                  setCouleurgroupe(e.target.value);
                }}
              />
            </div>
            <div>
              <span>Groupe Parents :</span>
              <select
                name=""
                id=""
                onChange={(e) => {
                  setGroupeParent(e.target.value);
                }}
              >
                <option value="">Selectionner un groupe</option>
                {listOptions}
              </select>
            </div>
          </div>
        </div>

        <div className="members-group">
          <div className="current-members" />
          <div className="list-groupe"> {ListGroupe}</div>
        </div>
        <div className="btn-validation">
          <button type="button">ANNULER</button>
          <button
            type="button"
            onClick={() => {
              submitGroupe(
                libgroupe,
                descriptiongroupe,
                GroupeParent,
                couleurgroupe
              );
            }}
          >
            VALIDER
          </button>
        </div>
      </div>
    </div>
  );
}
