import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableBody from "@mui/material/TableBody";
import useDisplay from "../../hooks/UseDisplayCalendar";

function RowManager({ month, year, events }) {
  const [Rows, setRows] = useState("");
  const { displayRow } = useDisplay(year, month, events);

  useEffect(() => {
    setRows(displayRow(events));
  }, [events]);

  return <TableBody sx={{ height: "95%" }}>{Rows}</TableBody>;
}

RowManager.propTypes = {
  events: PropTypes.array,
};

RowManager.defaultProps = {
  events: null,
};

export default RowManager;
