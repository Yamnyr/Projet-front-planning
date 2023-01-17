import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useCalendar from "../hooks/UseCalendar.jsx";

function EventManager({ eventlist, day, month }) {
  const { displayEvent } = useCalendar();
  const [displayEvents, setDisplayEvents] = useState("");

  useEffect(() => {
    setDisplayEvents(displayEvent(eventlist));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <span
        style={{
          height: "4%",
          fontWeight: "bold",
          fontSize: "0.6em",
          display: "inline-flex",
          alignItems: "end",
          justifyContent: "center",
        }}
      >
        {day} {month}
      </span>
      {displayEvents}
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
      desc_event: "Description",
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
