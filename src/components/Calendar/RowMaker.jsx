import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";
import useCalendar from "../../hooks/UseCalendar";

function RowMaker({ start, month, events, day, end }) {
  const { displayDate } = useCalendar();
  const [Row, setRow] = useState([]);

  useEffect(() => {
    setRow(displayDate(day, month, start, end));
  }, []);

  return <TableRow sx={{ verticalAlign: "top" }}>{Row}</TableRow>;
}

RowMaker.propTypes = {
  month: PropTypes.number,
  start: PropTypes.number,
  end: PropTypes.number,
  day: PropTypes.number,
};

RowMaker.defaultProps = {
  month: null,
  start: -1,
  end: -1,
  day: null,
};

export default RowMaker;
