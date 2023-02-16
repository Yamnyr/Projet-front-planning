import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Popover from "@mui/material/Popover";
import EventPopUp from "./PopUp/EventPopUp";

function Event({ eventDescription, height }) {
  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [positionTop, setPositionTop] = useState(0);
  const [positionLeft, setPositionLeft] = useState(0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    if (buttonRef.current) {
      const parentHeight = buttonRef.current.parentNode.clientHeight;
      buttonRef.current.style.maxHeight = `${parentHeight * (height * 0.01)}px`;
    }
    const ScreenHeight = window.innerHeight;
    const ScreenWidth = window.innerWidth;
    setPositionTop(ScreenHeight / 2);
    setPositionLeft(ScreenWidth / 2);
  }, [eventDescription]);
  return (
    <>
      <button
        aria-describedby={id}
        onClick={handleClick}
        ref={buttonRef}
        style={{
          height: `${height}%`,
          overflow: "hidden",
          borderRadius: "10px",
          width: "100%",
          backgroundColor: eventDescription.color,
          marginBottom: "1%",
        }}
      >
        <div
          style={{
            fontSize: "1em",
            height: "25%",
            width: "100%",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <span
            style={{
              marginLeft: "0.5vw",
              alignSelf: "center",
              overflow: "hidden",
            }}
          >
            {" "}
            {eventDescription.libEvent}{" "}
          </span>
        </div>
        <div
          style={{
            width: "100%",
            height: "150%",
            margin: "0.4vh 0 0 0.5vw",
            overflow: "hidden",
            textAlign: "start",
            fontSize: "0.85em",
          }}
        >
          {eventDescription.desc_event}
        </div>
      </button>
      <Popover
        open={open}
        onClose={handleClose}
        sx={{ width: `100%`, height: `100%` }}
        anchorReference="anchorPosition"
        anchorPosition={{ top: positionTop, left: positionLeft }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <EventPopUp event={eventDescription} />
      </Popover>
    </>
  );
}

Event.propTypes = {
  height: PropTypes.number,
  eventDescription: PropTypes.shape({
    libEvent: PropTypes.string,
    desc_event: PropTypes.string,
  }),
};

Event.defaultProps = {
  height: 100,
  eventDescription: {
    libEvent: "Event",
    desc_event: "Description",
  },
};

export default Event;
