import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableBody from "@mui/material/TableBody";
import useCalendar from "../hooks/UseCalendar";

function RowManager({ month, year, events }) {
  const { displayRow } = useCalendar();
  const [Rows, setRows] = useState([]);

  useEffect(() => {
    setRows(displayRow(month, year));
  }, []);

  return <TableBody sx={{ height: "95%" }}>{Rows}</TableBody>;
}

RowManager.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  events: PropTypes.array,
};

RowManager.defaultProps = {
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  events: null,
};

export default RowManager;
