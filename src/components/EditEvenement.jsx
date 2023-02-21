import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import "../App.css";
import useNewEvenement from "../hooks/UseNewEvenement";
import {useParams} from "react-router-dom";
import {fetchEvenementById} from "../services/api/evenementApi";
import {fetchAllGroupes} from "../services/api/groupeApi.js";

/*
import saveData from "./test"; */

export function Form() {
    const { idEvenement } = useParams();
    const [groupesList, setGroupesList] = useState([]);
    const [Evenement, setEvenement] = useState({ lib_evenement: "", date_evenement: "", description_evenement: "" });

    useEffect(() => {
        fetchAllGroupes().then((response) => {
            setGroupesList(response["hydra:member"]);
        });
    }, []);

    useEffect(() => {
        fetchEvenementById(idEvenement).then((data) => {
            console.log(data.concerne[0].id)
            const isoDate = data.date;
            const formattedDate = isoDate.slice(0, 10);
            setEvenement({ lib_evenement: data.lib_evenement, date_evenement: formattedDate, description_evenement: data.desc_evenement, concerne: data.concerne });
        });
    }, [idEvenement]);

    // const {
    //     formState: { errors },
    // } = useForm();
    // console.log(errors);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEvenement((prevGroup) => ({
            ...prevGroup,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // faire quelque chose avec les données du formulaire
    };
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
                onChange={(e) => setNom(e.target.value)}
            />
            <label>Date</label>
            <input
                name="date"
                required
                type="date"
                id="date"
                value={Evenement.date_evenement}
                min={moment().format("YYYY-MM-DD")}
                onChange={(e) => setDate(e.target.value)}
            />
            <label>Description</label>
            <textarea
                name="description"
                id="description"
                value={Evenement.description_evenement}
                onChange={(e) => setDescription(e.target.value)}
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
                            onChange={(e) => toggleValue(`api/groupes/${e.target.value}`)}
                        />
                        <span>{`${group.lib_groupe}`}</span>
                    </label>
                ))}
            </div>
            <input type="submit" className="submitButton" />
            {/*<label className={result}>{result}</label>*/}
        </form>
    );
}

export default function EditEvenement() {
    return <Form />;
}
