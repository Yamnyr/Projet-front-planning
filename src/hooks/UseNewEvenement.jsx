import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchAllGroupes } from "../services/api/groupeApi";
import UserContext from "../Context/index.js";

export default function useNewEvenement() {
  const [nom, setNom] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [groupeConcerne, setGroupeConcerne] = useState([]);

  const [groupesList, setGroupesList] = useState([]);
  const [result, setResult] = useState("");
  const { userData } = React.useContext(UserContext);

  console.log(userData);
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userData.token}`,
    },
  });

  useEffect(() => {
    fetchAllGroupes().then((response) => {
      setGroupesList(response["hydra:member"]);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`
          Nom: ${nom}
          Date: ${date}
          Description: ${description}
          GroupeConcerne: ${groupeConcerne}
          user: api/utilisateurs/${userData.userId}
        `);
    addEvent({ date }, { groupeConcerne }, { nom }, { description });
  };
  function addEvent({ date }, { groupeConcerne }, { nom }, { description }) {
    api
      .post("/api/evenements", {
        date,
        concerne: groupeConcerne,
        utilisateur: `api/utilisateurs/${userData.userId}`,
        libEvenement: nom,
        descEvenement: description,
      })
      .then((response) => {
        console.log("success");
        setResult("Evenement ajouté avec succes");
      })
      .catch((error) => {
        console.log("error");
        setResult(
          "l'Evénement n'a pas été ajoute, vérifiez que les champs soient bien remplis"
        );
      });
  }

  function toggleValue(val) {
    const index = groupeConcerne.indexOf(val);
    if (index > -1) {
      const newGroupeConcerne = [...groupeConcerne];
      newGroupeConcerne.splice(index, 1);
      setGroupeConcerne(newGroupeConcerne);
    } else {
      setGroupeConcerne([...groupeConcerne, val]);
    }
  }
  return {
    toggleValue,
    setNom,
    nom,
    date,
    description,
    groupesList,
    setDate,
    setDescription,
    setGroupeConcerne,
    setGroupesList,
    result,
    setResult,
    handleSubmit,
  };
}
