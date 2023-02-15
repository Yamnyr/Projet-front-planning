import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import {
  fetchAllGroupes,
  fetchNewGroupe,
  fetchGroupeByLib,
  fetchGroupeById,
} from "../services/api/groupeApi";
import Groupe from "../components/newGroupe/Groupe";

export default function useNewGroupe() {
  const [ListUserChecked, setListUserChecked] = useState([]); // eleve concernés par le groupe
  const [SearchGroupe, setSearchGroupe] = useState("");
  const [ListGroupe, setListGroupe] = useState([]);
  const [DataListGroupe, setDataListGroupe] = useState([]);
  const [listOptions, setListOptions] = useState();

  useEffect(() => {
    fetchGroupeByLib(SearchGroupe)
      .then((res) => {
        setDataListGroupe(res["hydra:member"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [SearchGroupe]);

  useEffect(() => {
    const groupe = DataListGroupe.map((g) => (
      <Groupe
        key={g.id}
        groupe={g}
        setListUserChecked={(e) => {
          setListUserChecked([...ListUserChecked, `api/utilisateurs/${e}`]);
          console.log(ListUserChecked);
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
    console.log(data, ListUserChecked);
    fetchNewGroupe(data, ListUserChecked).then((res) => {
      alert("Groupe crée avec succès");
      window.location.href = "/";
    });
  };
  return {
    ListGroupe,
    listOptions,
    submitGroupe,
    setSearchGroupe,
  };
}
