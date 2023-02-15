import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import {
  fetchAllGroupes,
  fetchNewGroupe,
  fetchGroupeByLib,
  fetchGroupeById,
  fetchDeleteUser,
  fetchEditGroupe,
} from "../services/api/groupeApi";
import Groupe from "../components/newGroupe/Groupe";

export default function useEditGroupe(idgroupe, register, getValues, setValue) {
  const [ListUserChecked, setListUserChecked] = useState([]); // eleve concernés par le groupe
  const [SearchGroupe, setSearchGroupe] = useState("");
  const [ListGroupe, setListGroupe] = useState([]);
  const [DataListGroupe, setDataListGroupe] = useState([]);
  const [listOptions, setListOptions] = useState();
  const [currentuser, setCurrentUser] = useState();
  const [reload, setReload] = useState(false);
  const DeleteUser = (Iduser) => {
    fetchDeleteUser(idgroupe, Iduser)
      .then((res) => {
        console.log(res);
        setReload(!reload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchGroupeByLib(SearchGroupe)
      .then((res) => {
        setDataListGroupe(res["hydra:member"]);
      })
      .catch((err) => {
        console.log(err);
      });
    fetchGroupeById(idgroupe)
      .then((res) => {
        setValue("libgroupe", res.lib_groupe);
        setValue("descriptiongroupe", res.desc_groupe);
        setValue("couleurgroupe", res.color);
        setValue("GroupeParent", res.groupe_parent.id);
        const user = res.utilisateurs.map((g) => (
          <div className="item-user">
            <div>
              {g.nom_utilisateur} {g.prenom_utilisateur} -
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  DeleteUser(g.id);
                }}
              >
                SUPP
              </button>
            </div>
          </div>
        ));
        setListUserChecked(
          res.utilisateurs.map((u) => `api/utilisateurs/${u.id}`)
        );
        console.log(res.utilisateurs.map((u) => `api/utilisateurs/${u.id}`));
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [SearchGroupe, reload]);

  useEffect(() => {
    const groupe = DataListGroupe.map((g) => (
      <Groupe
        key={g.id}
        groupe={g}
        setListUserChecked={(e) => {
          setListUserChecked([...ListUserChecked, `api/utilisateurs/${e}`]);
        }}
        ListUserChecked={ListUserChecked}
      />
    ));
    setListGroupe(groupe);

    fetchAllGroupes().then((res) => {
      const options = res["hydra:member"].map((groupe) => (
        <option key={groupe.id} value={groupe.id} name={groupe.lib_groupe}>
          {groupe.lib_groupe}
        </option>
      ));
      setListOptions(options);
    });
    console.log(ListUserChecked);
  }, [ListUserChecked, DataListGroupe]);

  const submitGroupe = (data) => {
    console.log(idgroupe, data, ListUserChecked);
    fetchEditGroupe(idgroupe, data, ListUserChecked)
      .then(() => {
        alert("Groupe crée avec succès");
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    ListGroupe,
    listOptions,
    currentuser,
    submitGroupe,
    setSearchGroupe,
  };
}
