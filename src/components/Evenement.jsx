import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import "../App.css";
import useNewEvenement from "../hooks/UseNewEvenement";
import {fetchAllGroupes} from "../services/api/groupeApi.js";
import {Link} from "react-router-dom";
import {fetchAllEvenements, fetchDeleteEvenement} from "../services/api/evenementApi.js";

export function Evenement() {
    const [evenementList, setEvenementList] = useState([]);
    const [search, setSearch] = useState("");4


    const [modalOpen, setModalOpen] = useState(false);
    const [modalEvent, setModalEvent] = useState({});

    const handleEventClick = (event) => {
        setModalOpen(true);
        setModalEvent(event);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        fetchAllEvenements().then((response) => {
            setEvenementList(response["hydra:member"]);
        });
    }, [evenementList]);
    const deleteEvent = (id) => {
        fetchDeleteEvenement(id).then(handleModalClose);
    }
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchAllEvenements({ e: search }).then((response) => {
            setEvenementList(response["hydra:member"]);
        });
    };
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredEvenements = evenementList.filter((evenement) =>
        evenement.lib_evenement.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                Liste des evenements
            </h1>
            <div style={{ textAlign: "center" }}>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Recherche par intitulé de l'evenement"
                        value={search}
                        onChange={handleSearchChange}
                        style={{
                            marginBottom: "20px",
                            width: 300,
                            height: 45,
                            boxShadow: "initial",
                        }}
                    />
                </form>
            </div>
            <div>
                {filteredEvenements.length === 0 && (
                    <p style={{ textAlign: "center", color: "red" }}>
                        Aucun résultat trouvé pour "{search}"
                    </p>
                )}
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "20px",
                }}
            >
                {filteredEvenements.map((evenement) => (
                    <div
                        key={evenement.id}
                        style={{
                            backgroundColor: "#59BDF0",
                            borderRadius: "10px",
                            padding: "20px",
                            margin: "10px",
                            width: "50%",
                            boxShadow: "0px 3px 3px #ccc",
                            transition: "all 0.3s ease-in-out",
                            textAlign: "center",
                        }}
                        onClick={() => handleEventClick(evenement)}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "scale(1.1)")
                        }
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    >
                        <span style={{ color: "white" }}>{evenement.lib_evenement}</span>
                        <i className="fas fa-info-circle" style={{ cursor: "pointer" }} />
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <h2>{modalEvent.lib_evenement}</h2>
                        <p>{modalEvent.desc_evenement}</p>
                        <p>{modalEvent.date}</p>
                        <h4>Groupe concernée :</h4>
                        {modalEvent.concerne.map((groupe) => (
                            <p key={groupe.id}><li >{groupe.lib_groupe}</li></p>
                        ))}
                        <button onClick={handleModalClose}>Fermer</button>
                        <Link to={`/edit/evenement/${modalEvent.id}`} className="text-navBar">
                            <button style={{ marginLeft: "20px" }} onClick="#">
                                Modifier
                            </button>
                        </Link>
                        <button style={{ marginLeft: "20px" }} onClick={() => {
                            deleteEvent(parseInt(modalEvent.id))
                        }}>
                            Supprimer
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function EventAdd() {
    return <Evenement />;
}
