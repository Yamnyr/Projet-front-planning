import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableBody from "@mui/material/TableBody";
import useCalendar from "../../hooks/UseCalendar";

function RowManager({ events }) {
  const { month, year, displayRow } = useCalendar();
  const [Rows, setRows] = useState([]);

  useEffect(() => {
    console.log("ertet");
    setRows([]);
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
