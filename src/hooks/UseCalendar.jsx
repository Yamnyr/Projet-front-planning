import React, { useEffect, useState } from "react";
import { fetchEvents, fetchGroups } from "../services/api/calendar";

function useCalendar() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [groups, setGroups] = useState([]);
  const [activeGroups, setActiveGroups] = useState([]);
  const [events, setEvents] = useState([]);
  const [waiting, setWaiting] = useState(false);

  const filterEvents = (event) =>
    event.sort((a, b) => new Date(a.date) - new Date(b.date));

  useEffect(() => {
    setWaiting(true);
    fetchGroups().then((data) => {
      setGroups(data);
      setActiveGroups(data);
    });
  }, []);

  useEffect(() => {
    setWaiting(true);
    const shuffledEvents = [];
    const eventPromises = activeGroups.map((activeGroup) =>
      fetchEvents(
        `${month === 1 ? year - 1 : year}-${
          month === 1 ? "12" : month - 1 < 10 ? `0${month - 1}` : month - 1
        } -22`,
        `${month === 12 ? year + 1 : year}-${
          month === 12 ? "01" : month + 1 < 10 ? `0${month + 1}` : month + 1
        }-06`,
        activeGroup.lib_groupe
      ).then((events) =>
        events[0].map((event) => ({
          libEvent: event.lib_evenement,
          date: event.date,
          desc_event: event.desc_evenement,
          color: activeGroup.color,
        }))
      )
    );
    Promise.all(eventPromises).then((eventArrays) => {
      eventArrays.forEach((events) => {
        shuffledEvents.push(...events);
      });
      setEvents(filterEvents(shuffledEvents));
      setWaiting(false);
    });
  }, [year, month, activeGroups]);

  const updateDate = (date) => {
    setMonth(date.$d.getMonth() + 1);
    setYear(date.$d.getFullYear());
  };

  const updateGroups = (groupes) => {
    setActiveGroups(groupes);
  };

  return { month, year, groups, events, waiting, updateDate, updateGroups };
}

export default useCalendar;
