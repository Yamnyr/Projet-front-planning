import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableBody from "@mui/material/TableBody";
import useCalendar from "../../hooks/UseCalendar";
import useDisplayCalendar from "../../hooks/useDisplayCalendar";
import { CalendarContext } from "../../context/CalendarContext";

function RowManager({ events }) {
  const { month, year } = useContext(CalendarContext);
  const { displayRow } = useDisplayCalendar();
  const [Rows, setRows] = useState("");

  useEffect(() => {
    setRows("");
    setRows(displayRow());
  }, [month, year]);

  return <TableBody sx={{ height: "95%" }}>{Rows}</TableBody>;
}

RowManager.propTypes = {
  events: PropTypes.array,
};

RowManager.defaultProps = {
  events: null,
};

export default RowManager;
