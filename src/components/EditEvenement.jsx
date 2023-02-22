import React, {useEffect, useState} from "react";
import moment from "moment";
import "../App.css";
import {useParams} from "react-router-dom";
import {fetchEditEvenement, fetchEvenementById} from "../services/api/evenementApi";
import {fetchAllGroupes} from "../services/api/groupeApi.js";

/*
import saveData from "./test"; */

export function Form() {
    const { idEvenement } = useParams();
    const [groupesList, setGroupesList] = useState([]);
    const [Evenement, setEvenement] = useState({ lib_evenement: "", date_evenement: "", desc_evenement: "" });

    const [groupeConcerne, setGroupeConcerne] = useState([]);

    useEffect(() => {
        fetchAllGroupes().then((response) => {
            setGroupesList(response["hydra:member"]);
        });
    }, []);

    useEffect(() => {
        fetchEvenementById(idEvenement).then((data) => {
            const isoDate = data.date;
            const formattedDate = isoDate.slice(0, 10);
            setEvenement({ lib_evenement: data.lib_evenement, date_evenement: formattedDate, desc_evenement: data.desc_evenement, concerne: groupeConcerne });
            setGroupeConcerne(data.concerne.map((grp) => `api/groupes/${grp.id}`));
            console.log(groupeConcerne)
        });
        console.log(Evenement)
    }, [idEvenement]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEvenement((prevGroup) => ({
            ...prevGroup,
            [name]: value,
        }));
    };
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
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Evenement)
        fetchEditEvenement(Evenement).then(r => console.log(r))
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
                // onChange={(e) => setNom(e.target.value)}
                onChange={(e) => setEvenement({lib_evenement: e.target.value})}
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
                onChange={(e) => setEvenement({date_evenement: e.target.value})}
            />
            <label>Description</label>
            <textarea
                name="description"
                id="description"
                value={Evenement.desc_evenement}
                // onChange={(e) => setDescription(e.target.value)}
                onChange={(e) => setEvenement({desc_evenement: e.target.value})}
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
            {/*<label className={result}>{result}</label>*/}
        </form>
    );
}

export default function EditEvenement() {
    return <Form />;
}
