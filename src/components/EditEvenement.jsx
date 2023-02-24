import React, { useEffect, useState } from "react";
import moment from "moment";
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  fetchEditEvenement,
  fetchEvenementById,
} from "../services/api/evenementApi";
import { fetchAllGroupes } from "../services/api/groupeApi.js";

/*
import saveData from "./test"; */

export function Form() {
  const { idEvenement } = useParams();
  const [groupesList, setGroupesList] = useState([]);
  const [Evenement, setEvenement] = useState({
    lib_evenement: "",
    date_evenement: "",
    desc_evenement: "",
    concerne: [],
  });

  const [groupeConcerne, setGroupeConcerne] = useState([]);

  const [result, setResult] = useState("");
  useEffect(() => {
    fetchAllGroupes().then((response) => {
      setGroupesList(response["hydra:member"]);
    });
  }, []);

  useEffect(() => {
    fetchEvenementById(idEvenement).then((data) => {
      const isoDate = data.date;
      const formattedDate = isoDate.slice(0, 10);
      setGroupeConcerne(data.concerne.map((grp) => `api/groupes/${grp.id}`));
      setEvenement({
        lib_evenement: data.lib_evenement,
        date_evenement: formattedDate,
        desc_evenement: data.desc_evenement,
        concerne: [],
      });
    });
  }, [idEvenement]);

  useEffect(() => {
    setEvenement({ ...Evenement, concerne: groupeConcerne });
  }, [groupeConcerne]);

  useEffect(() => {
    console.log(Evenement);
  }, [Evenement]);

  function toggleValue(val) {
    const index = groupeConcerne.indexOf(val);
    if (index > -1) {
      const newGroupeConcerne = [...groupeConcerne];
      newGroupeConcerne.splice(index, 1);
      setGroupeConcerne(newGroupeConcerne);
      setEvenement({ ...Evenement, concerne: groupeConcerne });
    } else {
      setGroupeConcerne([...groupeConcerne, val]);
      setEvenement({ ...Evenement, concerne: groupeConcerne });
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    editEvent(Evenement);
  };
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  function editEvent(Evenement) {
    console.log(Evenement);
    api
      .put(`/api/evenements/${idEvenement}`, {
        libEvenement: Evenement.lib_evenement,
        date: Evenement.date_evenement,
        descEvenement: Evenement.desc_evenement,
        concerne: Evenement.concerne,
      })
      .then((response) => {
        console.log(response);
        setResult("Evenement ajouté avec succes");
      })
      .catch((error) => {
        console.log("error");
        setResult(
          "l'Evénement n'a pas été ajoute, vérifiez que les champs soient bien remplis"
        );
      });
  }
  return (
    <form className="form-evenement" onSubmit={handleSubmit}>
      <h1>modiffication de l/Evenement {Evenement.lib_evenement}</h1>
      <label>Nom</label>
      <input
        type="text"
        required
        id="nom"
        name="nom"
        value={Evenement.lib_evenement}
        // onChange={(e) => setNom(e.target.value)}
        onChange={(e) =>
          setEvenement({ ...Evenement, lib_evenement: e.target.value })
        }
      />
      <label>Date</label>
      <input
        name="date"
        required
        type="date"
        id="date"
        value={Evenement.date_evenement}
        min={moment().format("YYYY-MM-DD")}
        // onChange={(e) => setDate(e.target.value)}
        onChange={(e) =>
          setEvenement({ ...Evenement, date_evenement: e.target.value })
        }
      />
      <label>Description</label>
      <textarea
        name="description"
        id="description"
        value={Evenement.desc_evenement}
        // onChange={(e) => setDescription(e.target.value)}
        onChange={(e) =>
          setEvenement({ ...Evenement, desc_evenement: e.target.value })
        }
      />
      <label>Groupe concerné</label>
      <div className="scroll">
        {groupesList.map((group) => (
          <label className="checkbox" key={group.id}>
            <input
              className="checkbox"
              type="checkbox"
              id={group.id}
              name="interest"
              value={`${group.id}`}
              checked={groupeConcerne.includes(`api/groupes/${group.id}`)}
              onChange={(e) => toggleValue(`api/groupes/${e.target.value}`)}
            />
            <span>{`${group.lib_groupe}`}</span>
          </label>
        ))}
      </div>
      <input type="submit" className="submitButton" />
      <label className={result}>{result}</label>
    </form>
  );
}

export default function EditEvenement() {
  return <Form />;
}
