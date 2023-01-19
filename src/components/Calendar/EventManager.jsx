import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import useCalendar from "../../hooks/UseCalendar";
import EventPopUp from "./Event/EventPopUp.jsx";

function EventManager({ eventlist, day, month }) {
  const { displayEvent } = useCalendar();
  const [displayEvents, setDisplayEvents] = useState("");
  const divRef = useRef(null);
  const buttonPlusRef = useRef(null);
  const [buttonPlus, setButtonPlus] = useState("");

  useLayoutEffect(() => {
    if (divRef.current) {
      const parentHeight = divRef.current.parentNode.clientHeight;
      divRef.current.style.maxHeight = `${parentHeight}px`;
      if (eventlist.length > 3) {
        setButtonPlus(
          <button
            ref={buttonPlusRef}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              display: "flex",
              flexGrow: 1,
              backgroundColor: "#000000",
              color: "#FFFFFF",
              maxHeight: `${parentHeight * 0.1}px`,
            }}
          >
            +{eventlist.length - 3}
          </button>
        );
      }
    }
  }, []);

  useEffect(() => {
    setDisplayEvents(displayEvent(eventlist));
  }, []);

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
        "Descriptionvyiffiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiigivtfbgyhunijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
  ],
};

export default EventManager;
