import * as React from "react";
import { useState } from "react";
import EventPopUp from "./EventPopUp";

export default function ButtonPopUp({ events }) {
  const [openEvent, setOpenEvent] = useState(null);
  const [openListe, setOpenListe] = useState(true);
  const handleClick = (event) => {
    setOpenEvent(event);
    setOpenListe(false);
  };
  return (
    <div>
      {openListe && (
        <div>
          {events.map((event) => (
            <div onClick={() => handleClick(event)}>
              <EventPopUp event={event} />
            </div>
          ))}
        </div>
      )}
      {openEvent && <EventPopUp event={openEvent} />}
    </div>
  );
}
