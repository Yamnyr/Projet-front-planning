import * as React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function EventPopUp({ event }) {
  return (
    <div
      style={{
        opacity: 0.95,
        padding: "20px",
        borderRadius: "4px",
        boxShadow: "0px 0px 10px #cccccc",
        transition: "all 0.3s ease-in-out",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "20px",
        }}
      >
        <h1
          style={{
            color: "#000000",
            fontSize: "24px",
            marginBottom: "10px",
          }}
        >
          {event.libEvent}{" "}
        </h1>
        <h3
          style={{
            color: "#000000",
            fontSize: "18px",
            marginBottom: "10px",
          }}
        >
          {event.date.substring(8, 10)}/{event.date.substring(5, 7)}
        </h3>
      </div>
      <div>
        <h4
          style={{
            color: "#000000",
            fontSize: "18px",
            marginRight: "10px",
            marginBottom: "10px",
            paddingRight: "10px",
          }}
        >
          Description:
        </h4>
        <p
          style={{
            color: "#000",
            fontSize: "16px",
            marginBottom: "10px",
            textAlign: "justify",
          }}
        >
          {event.desc_event}
        </p>
      </div>
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
