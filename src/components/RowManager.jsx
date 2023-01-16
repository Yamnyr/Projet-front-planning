import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TableBody from "@mui/material/TableBody";
import RowMaker from "./RowMaker";

function RowManager({ month, year, events }) {
  const [Rows, setRows] = useState([]);

  useEffect(() => {
    const DayInMonth = new Date(year, month, 0).getDate();
    const FirstDayOfTheMonth = new Date(year, month - 1, 1).getDay();
    const DayInFirstWeek =
      FirstDayOfTheMonth === 0 ? 6 : FirstDayOfTheMonth - 1;

    const tempsRow = [
      <RowMaker start={DayInFirstWeek} month={month} day={1} />,
    ];
    for (
      let i = -(DayInFirstWeek - 7) + 1;
      i < DayInMonth + -(DayInFirstWeek - 7) + 1;
      i += 7
    ) {
      i > DayInMonth - 7
        ? tempsRow.push(<RowMaker month={month} day={i} end={DayInMonth} />)
        : tempsRow.push(<RowMaker month={month} day={i} />);
    }
    setRows(tempsRow);
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
