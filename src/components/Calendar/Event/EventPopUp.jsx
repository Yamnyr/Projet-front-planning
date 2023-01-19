import * as React from "react";
import PropTypes from "prop-types";

export default function EventPopUp({ event }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <h1>{event.libEvent} </h1> <h3> Date </h3>
      </div>
      <h4>Description :</h4>
      <p>{event.desc_event}</p>
    </div>
  );
}

EventPopUp.propTypes = {
  event: PropTypes.shape({
    libEvent: PropTypes.string,
    desc_event: PropTypes.string,
  }),
};

EventPopUp.defaultProps = {
  event: {
    libEvent: "Event",
    desc_event: "Description",
  },
};
