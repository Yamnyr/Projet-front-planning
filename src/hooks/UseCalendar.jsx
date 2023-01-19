import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import EventManager from "../components/Calendar/EventManager";
import Event from "../components/Calendar/Event";
import RowMaker from "../components/Calendar/RowMaker";

const monthNames = [
  "Janvier",
  "Février",
  "Mardi",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

function useCalendar() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  const updateDate = (date) => {
    setMonth(date.$d.getMonth() + 1);
    setYear(date.$d.getFullYear());
  };

  const displayRow = () => {
    console.log("ffffff");
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
    return tempsRow;
  };
  const displayEvent = (eventlist) => {
    let events = eventlist.map((event) => (
      <Event
        height={eventlist.length > 3 ? 25 : 100 / eventlist.length - 4}
        eventDescription={event}
      />
    ));

    if (eventlist.length > 3) {
      events = events.slice(0, 3);
    }
    return events;
  };
  const displayDate = (day, monthCell, start, end) => {
    const tempsRow = [];
    if (start !== -1) {
      for (let i = 0; i < 7; i++) {
        tempsRow.push(
          i < start ? (
            <TableCell sx={{ padding: 0, height: "auto" }}>
              <EventManager
                month={
                  monthCell === 1
                    ? `${monthNames[11].slice(0, 3)}.`
                    : `${monthNames[monthCell - 2].slice(0, 3)}.`
                }
                day={
                  new Date(
                    monthCell === 1
                      ? new Date().getFullYear() - 1
                      : new Date().getFullYear(),
                    monthCell === 1 ? 12 : monthCell - 1,
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
              <EventManager
                month={`${monthNames[monthCell - 1].slice(0, 3)}.`}
                day={start + 1 - i}
              />
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
                month={
                  monthCell === 12
                    ? `${monthNames[0].slice(0, 3)}.`
                    : `${monthNames[monthCell].slice(0, 3)}.`
                }
                day={
                  -(
                    new Date(
                      monthCell === 12
                        ? new Date().getFullYear() + 1
                        : new Date().getFullYear(),
                      monthCell === 12 ? 1 : monthCell,
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
            <TableCell sx={{ padding: 0, height: "auto" }}>
              <EventManager
                month={`${monthNames[monthCell - 1].slice(0, 3)}.`}
                day={day + i}
              />
            </TableCell>
          )
        );
      }
    } else {
      for (let i = 0; i < 7; i++) {
        tempsRow.push(
          <TableCell sx={{ padding: 0, height: "auto" }}>
            <EventManager
              month={`${monthNames[monthCell - 1].slice(0, 3)}.`}
              day={day + i}
            />
          </TableCell>
        );
      }
    }
    return tempsRow;
  };

  return { month, year, updateDate, displayRow, displayEvent, displayDate };
}

export default useCalendar;
