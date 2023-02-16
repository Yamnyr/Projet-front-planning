import React, { useEffect, useRef, useState } from "react";
import Popover from "@mui/material/Popover";
import ButtonPopUp from "./PopUp/ButtonPopUp";

function ButtonEvent({ eventlist, divRef }) {
  const buttonPlusRef = useRef(null);
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
    // eslint-disable-next-line react/prop-types
    if (divRef.current) {
      // eslint-disable-next-line react/prop-types
      const parentHeight = divRef.current.parentNode.clientHeight;
      buttonPlusRef.current.style.maxHeight = `${parentHeight * 0.1}px`;
      // eslint-disable-next-line react/prop-types
      setPositionTop(window.innerHeight / 2);
      setPositionLeft(window.innerWidth / 2);
    }
  }, [eventlist]);
  return (
    <>
      <button
        aria-describedby={id}
        onClick={handleClick}
        ref={buttonPlusRef}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          display: "flex",
          flexGrow: 1,
          backgroundColor: "#000000",
          color: "#FFFFFF",
        }}
      >
        +{eventlist.length}
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
        <ButtonPopUp events={eventlist} />
      </Popover>
    </>
  );
}

export default ButtonEvent;
