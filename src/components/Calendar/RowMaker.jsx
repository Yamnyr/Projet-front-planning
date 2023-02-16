import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";

function RowMaker({ start, day, end, rowMaker, events, howManyRow }) {
  const [Row, setRow] = useState([]);

  useEffect(() => {
    setRow(rowMaker(start, end, day, events));
  }, [events]);

  return (
    <TableRow sx={{ verticalAlign: "top", height: `${howManyRow}%` }}>
      {Row}
    </TableRow>
  );
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
