import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import { fetchAllGroupes } from "../services/api/evenementApi";

/*
import saveData from "./test"; */

export function Form() {
    const [nom, setNom] = React.useState("");
    const [date, setDate] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [groupeConcerne, setGroupeConcerne] = React.useState([]);

    const [groupesList, setGroupesList] = useState([]);

    const api = axios.create({
        baseURL: "http://127.0.0.1:8000",
        headers: {
            "Content-Type": "application/json",
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
      
    `);
    addEvent({date}, {groupeConcerne}, {nom} , {description});
    };
    function addEvent({date}, {groupeConcerne}, {nom}, {description}) {
        api
            .post("/api/evenements", {
                "date": date,
                "concerne": groupeConcerne
                ,
                // "utilisateur": "api/utilisateurs/2",
                "libEvenement": nom,
                "descEvenement": description
            })
            .then((response) => {
                console.log("success")
            })
            .catch((error) => {
                console.log("error");
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Nouvel Evenement</h1>
            <label>Nom</label>
            <input
                type="text"
                id="nom"
                name="nom"
                onChange={(e) => setNom(e.target.value)}
            />
            <label>Date</label>
            <input
                name="date"
                type="date"
                id="date"
                min={moment().format("YYYY-MM-DD")}
                onChange={(e) => setDate(e.target.value)}
            />
            <label>Description</label>
            <textarea
                name="description"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <label>Groupe concerné</label>
            {/* <select name="groupes" multiple>
                {group.map(group => <option key={group.id}>{`${group.lib_groupe}`}</option>)}
            </select>{`${group.lib_groupe}`} */}
            <div className="scroll">
                {groupesList.map((group) => (
                    <label className="checkbox">
                        <input
                            className="checkbox"
                            type="checkbox"
                            id={group.id}
                            name="interest"
                            value={`${group.id}`}
                            onChange={(e) =>
                                setGroupeConcerne([...groupeConcerne, 'api/groupes/'+e.target.value])
                            }
                        />
                        <span>{`${group.lib_groupe}`}</span>
                    </label>
                ))}
            </div>
            <input type="submit" className="submitButton" />
        </form>
    );
}

export default function EventAdd() {
    return <Form />;
}
