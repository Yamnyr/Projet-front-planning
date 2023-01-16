import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import EventManager from "./EventManager";

const monthNames = [
  "Jan.",
  "Fev.",
  "Mar.",
  "Avr.",
  "Mai",
  "Jui.",
  "Jui.",
  "Aou.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Dec.",
];

function RowMaker({ start, month, events, day, end }) {
  const [Row, setRow] = useState([]);

  useEffect(() => {
    const tempsRow = [];
    if (start !== -1) {
      for (let i = 0; i < 7; i++) {
        tempsRow.push(
          i < start ? (
            <TableCell>
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
            <TableCell>
              <EventManager month={monthNames[month - 1]} day={start + 1 - i} />
            </TableCell>
          )
        );
      }
    } else if (end !== -1) {
      for (let i = 0; i < 7; i++) {
        tempsRow.push(
          day + i > end ? (
            <TableCell>
              <EventManager
                month={month === 12 ? monthNames[0] : monthNames[month]}
                day={
                  -(
                    new Date(
                      month === 12
                        ? new Date().getFullYear() + 1
                        : new Date().getFullYear(),
                      month === 12 ? 1 : month,
                      0
                    ).getDate() -
                    i -
                    end +
                    1
                  )
                }
              />
            </TableCell>
          ) : (
            <TableCell>
              <EventManager month={monthNames[month - 1]} day={day + i} />
            </TableCell>
          )
        );
      }
    } else {
      for (let i = 0; i < 7; i++) {
        tempsRow.push(
          <TableCell>
            <EventManager month={monthNames[month - 1]} day={day + i} />
          </TableCell>
        );
      }
    }
    setRow(tempsRow);
  }, []);

  return <TableRow>{Row}</TableRow>;
}

RowMaker.propTypes = {
  month: PropTypes.number,
  start: PropTypes.number,
  end: PropTypes.number,
};

RowMaker.defaultProps = {
  month: null,
  start: -1,
  end: -1,
};

export default RowMaker;
