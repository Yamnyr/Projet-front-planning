import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchAllGroupes } from "../services/api/groupeApi";
import UserContext from "../Context/index.js";
import {
  fetchAllEvenements,
  fetchDeleteEvenement,
} from "../services/api/evenementApi.js";

export default function useEvenement() {
  const [evenementList, setEvenementList] = useState([]);
  const [search, setSearch] = useState("");
  4;

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
  };
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
  return {
    handleSearchSubmit,
    handleSearchChange,
    handleEventClick,
    handleModalClose,
    deleteEvent,
    filteredEvenements,
    modalOpen,
    modalEvent,
    search,
  };
}
