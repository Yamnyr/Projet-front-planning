import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import moment from "moment";
import axios from "axios";
import { fetchAllGroupes } from "../services/api/evenementApi";
import "../App.css";
import UserContext from "../Context/index";
import useNewGroupe from "../hooks/useNewGroupe.jsx";
import useNewEvenement from "../hooks/UseNewEvenement.jsx";

/*
import saveData from "./test"; */

export function Form() {
    const {
        formState: { errors },
    } = useForm();
    console.log(errors);

    const { toggleValue, setDescription, setDate, setNom, nom, date, description, groupesList, result, handleSubmit } =
        useNewEvenement();
    return (
        <form onSubmit={handleSubmit}>
            <h1>Nouvel Evenement</h1>
            <label>Nom</label>
            <input
                type="text"
                required={true}
                id="nom"
                name="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
            />
            <label>Date</label>
            <input
                name="date"
                required={true}
                type="date"
                id="date"
                value={date}
                min={moment().format("YYYY-MM-DD")}
                onChange={(e) => setDate(e.target.value)}
            />
            <label>Description</label>
            <textarea
                name="description"
                id="description"
                value={description}
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
                            onChange={(e) =>
                                toggleValue('api/groupes/'+e.target.value)
                            }
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

export default function EventAdd() {
    return <Form />;
}
