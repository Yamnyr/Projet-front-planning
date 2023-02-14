import React, { useEffect, useState } from "react";
import { fetchAllGroupes, fetchNewGroupe } from "../services/api/groupeApi";
import Groupe from "../components/newGroupe/Groupe";

export default function useNewGroupe() {
  const [ListUserChecked, setListUserChecked] = useState([]); // eleve concernés par le groupe

  const [ListGroupe, setListGroupe] = useState([]);
  const [listOptions, setListOptions] = useState();

  useEffect(() => {
    fetchAllGroupes().then((res) => {
      const groupe = res["hydra:member"].map((groupe) => (
        <Groupe
          key={groupe.id}
          groupe={groupe}
          setListUserChecked={(e) => {
            setListUserChecked([...ListUserChecked, `api/utilisateurs/${e}`]);
          }}
          ListUserChecked={ListUserChecked}
        />
      ));
      setListGroupe(groupe);
      const options = res["hydra:member"].map((groupe) => (
        <option key={groupe.id} value={groupe.id} name={groupe.lib_groupe}>
          {groupe.lib_groupe}
        </option>
      ));
      setListOptions(options);
    });
  }, [ListUserChecked]);

  const submitGroupe = (
    libgroupe = "default libelle",
    descriptiongroupe = "default description",
    GroupeParent = null,
    couleurgroupe = "#ffffff"
  ) => {
    fetchNewGroupe(
      libgroupe,
      descriptiongroupe,
      GroupeParent,
      couleurgroupe,
      ListUserChecked
    ).then((res) => {
      console.log(res);
    });
  };

  return {
    ListGroupe,
    listOptions,
    submitGroupe,
  };
}
