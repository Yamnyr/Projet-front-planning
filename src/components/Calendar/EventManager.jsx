import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Event from "./Event";
import ButtonEvent from "./ButtonEvent.jsx";

function EventManager({ eventlist, day, month }) {
  const [displayEvents, setDisplayEvents] = useState("");
  const divRef = useRef(null);
  const [buttonPlus, setButtonPlus] = useState("");

  useEffect(() => {
    let events = eventlist.map((event) => (
      <Event
        height={eventlist.length > 3 ? 25 : 100 / eventlist.length - 4}
        eventDescription={event}
      />
    ));

    if (eventlist.length > 3) {
      events = events.slice(0, 3);
    }
    if (divRef.current) {
      const parentHeight = divRef.current.parentNode.clientHeight;
      divRef.current.style.maxHeight = `${parentHeight}px`;
    }
    setDisplayEvents(events);
    setButtonPlus(
      <ButtonEvent eventlist={eventlist.slice(3)} divRef={divRef} />
    );
  }, [eventlist]);

  return (
    <div
      ref={divRef}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <span
        style={{
          fontWeight: "bold",
          fontSize: "0.6em",
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        {day} {month}
      </span>
      {displayEvents}
      {buttonPlus}
    </div>
  );
}

EventManager.propTypes = {
  day: PropTypes.number,
  month: PropTypes.string,
  eventlist: PropTypes.arrayOf({
    event: PropTypes.shape({
      libEvent: PropTypes.string,
      heureDeb: PropTypes.string,
      heureFin: PropTypes.string,
    }),
  }),
};

EventManager.defaultProps = {
  day: 3,
  month: "oct",
  eventlist: [
    {
      libEvent: "Event",
      heureDeb: null,
      heureFin: null,
      desc_event:
        "Descriptionvyiffiiiiiiiiiiivyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
      libEvent: "Event",
      heureDeb: null,
      heureFin: null,
      desc_event:
        "Descriptionvyiffiiiiiiiiiiivyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
      libEvent: "Event",
      heureDeb: null,
      heureFin: null,
      desc_event: "Description",
    },
    {
      libEvent: "Event",
      heureDeb: null,
      heureFin: null,
      desc_event: "Description",
    },
    {
      libEvent: "Event",
      heureDeb: null,
      heureFin: null,
      desc_event:
        "Descriptionvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
      libEvent: "Event",
      heureDeb: null,
      heureFin: null,
      desc_event: "Description",
    },
    {
      libEvent: "Event",
      heureDeb: null,
      heureFin: null,
      desc_event:
        "Descriptionvyiffiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
      libEvent: "Event",
      heureDeb: null,
      heureFin: null,
      desc_event: "Description",
    },
    {
      libEvent: "Event",
      heureDeb: null,
      heureFin: null,
      desc_event:
        "Descriptionvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjj",
    },
  ],
};

export default EventManager;
