import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Event from "./Event";

function EventManager({ eventlist, day, month }) {
  const [displayEvents, setDisplayEvents] = useState("");

  useEffect(() => {
    let events = eventlist.map((event) => (
      <Event
        height={eventlist.length > 3 ? 25 : 100 / eventlist.length - 4}
        event={event}
      />
    ));

    if (eventlist.length > 3) {
      events = events.slice(0, 3);
      events.push(
        <button
          style={{
            height: "10%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
        >
          +{eventlist.length - 3}
        </button>
      );
    }
    setDisplayEvents(events);
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
