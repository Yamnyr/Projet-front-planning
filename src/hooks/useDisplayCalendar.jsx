import React, { useContext, useEffect, useState } from "react";
import RowMaker from "../components/Calendar/RowMaker";
import { CalendarContext } from "../context/CalendarContext";

function useDisplayCalendar() {
  const { state, dispatch } = useContext(CalendarContext);
}

export default useDisplayCalendar();
