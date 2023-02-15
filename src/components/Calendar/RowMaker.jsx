import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EventManager from "./EventManager";

function RowMaker({ start, year, month, events, day, end, monthNames }) {
  const [Row, setRow] = useState([]);

  useEffect(() => {
    const tempsRow = [];
    if (start !== -1) {
      for (let i = 0; i < 7; i++) {
        tempsRow.push(
          i < start ? (
            <TableCell sx={{ padding: 0, height: "auto" }}>
              <EventManager
                month={month === 1 ? monthNames[11] : monthNames[month - 2]}
                day={
                  new Date(
                    month === 1
                      ? new Date().getFullYear() - 1
                      : new Date().getFullYear(),
                    month === 1 ? 12 : month - 1,
                    0
                  ).getDate() -
                  start +
                  i +
                  1
                }
              />
            </TableCell>
          ) : (
            <TableCell sx={{ padding: 0, height: "auto" }}>
              <EventManager month={monthNames[month - 1]} day={i - start + 1} />
            </TableCell>
          )
        );
      }
    } else if (end !== -1) {
      for (let i = 0; i < 7; i++) {
        tempsRow.push(
          day + i > end ? (
            <TableCell sx={{ padding: 0, height: "auto" }}>
              <EventManager
                month={month === 12 ? monthNames[0] : monthNames[month]}
                day={day + i - end}
              />
            </TableCell>
          ) : (
            <TableCell sx={{ padding: 0, height: "auto" }}>
              <EventManager month={monthNames[month - 1]} day={day + i} />
            </TableCell>
          )
        );
      }
    } else {
      for (let i = 0; i < 7; i++) {
        tempsRow.push(
          <TableCell sx={{ padding: 0, height: "auto" }}>
            <EventManager month={monthNames[month - 1]} day={day + i} />
          </TableCell>
        );
      }
    }
    setRow(tempsRow);
  }, [month, year]);

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
