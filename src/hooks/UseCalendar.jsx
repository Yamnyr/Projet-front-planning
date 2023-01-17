import React from "react";
import TableCell from "@mui/material/TableCell";
import EventManager from "../components/EventManager";
import Event from "../components/Event";
import RowMaker from "../components/RowMaker.jsx";

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

function useCalendar() {
  const displayRow = (month, year) => {
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
        event={event}
      />
    ));

    if (eventlist.length > 3) {
      events = events.slice(0, 3);
      events.push(
        <button
          style={{
            height: "10%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "#000000",
            color: "#FFFFFF",
          }}
        >
          +{eventlist.length - 3}
        </button>
      );
    }
    return events;
  };
  const displayDate = (day, month, start, end) => {
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
    return tempsRow;
  };

  return { displayRow, displayEvent, displayDate };
}

export default useCalendar;
