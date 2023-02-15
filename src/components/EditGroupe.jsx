import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

import useEditGroupe from "../hooks/useEditGroupe";

const { Group, Label, Control } = { ...Form };
export default function Newgroupe() {
  const { idgroupe } = useParams();
  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    ListGroupe,
    listOptions,
    currentuser,
    submitGroupe,
    setSearchGroupe,
  } = useEditGroupe(idgroupe, register, getValues, setValue);

  register("libgroupe", "res.libelle_groupe", { required: true });

  return (
    <div className="container-main">
      <div className="newGroupe-container">
        <form onSubmit={handleSubmit(submitGroupe)}>
          <div className="info-groupe">
            <div className="size">
              <div>
                <Group>
                  <Label>Libelle du groupe :</Label>
                  <Control
                    required
                    type="text"
                    placeholder="Nom du groupe"
                    {...register("libgroupe")}
                  />
                </Group>
              </div>
              <div>
                <Group>
                  <Label>Description Groupe :</Label>
                  <Control
                    type="text"
                    placeholder="Description du groupe"
                    {...register("descriptiongroupe")}
                  />
                </Group>
              </div>
            </div>
            <hr />
            <div className="size">
              <div>
                <Group>
                  <Label>Date creation :</Label>
                  <Control
                    type="text"
                    placeholder="Date creation"
                    disabled
                    value={new Date().toUTCString()}
                  />
                </Group>
              </div>
              <div>
                <Group>
                  <Label>Couleur : </Label>
                  <Control
                    type="color"
                    placeholder="Description du groupe"
                    {...register("couleurgroupe")}
                  />
                </Group>
              </div>
              <div>
                <span>Groupe parent :</span>
                <Control
                  required
                  as="select"
                  type="select"
                  {...register("GroupeParent")}
                >
                  <option value={null}>Selectionner un groupe</option>
                  {listOptions}
                </Control>
              </div>
            </div>
          </div>

          <div className="members-group">
            <div className="current-members">{currentuser}</div>
            <div className="right-side">
              <div className="search">
                <input
                  type="text"
                  onChange={(e) => {
                    setSearchGroupe(e.target.value);
                  }}
                  placeholder="Recherche Groupe"
                />
              </div>
              <div className="list-groupe"> {ListGroupe}</div>
            </div>
          </div>
          <div className="btn-validation">
            <button
              type="button"
              onClick={() => {
                window.history.back();
              }}
            >
              ANNULER
            </button>
            <button type="submit">VALIDER</button>
          </div>
        </form>
      </div>
    </div>
  );
}
