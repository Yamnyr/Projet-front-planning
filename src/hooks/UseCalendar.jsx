import React, { useContext, useEffect } from "react";
import { CalendarContext } from "../context/CalendarContext";
import { setDefault } from "../action/CalendarActions";

function useCalendar() {
  const { dispatch } = useContext(CalendarContext);

  const setDefault = () => {
    console.log("dededed");
    dispatch(
      setDefault(new Date().getMonth() + 1, new Date().getFullYear(), [])
    );
  };

  return { setDefault };
}

export default useCalendar;
