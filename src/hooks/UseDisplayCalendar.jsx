import React from "react";
import TableCell from "@mui/material/TableCell";
import RowMaker from "../components/Calendar/RowMaker";
import EventManager from "../components/Calendar/EventManager";
import Event from "../components/Calendar/Event";

const monthNames = [
  "Jan.",
  "Fév.",
  "Mar.",
  "Avr.",
  "Mai.",
  "Jui.",
  "Juil.",
  "Aoû.",
  "Sep.",
  "Oct.",
  "Nov.",
  "Déc.",
];
function useDisplay(year, month) {
  const eventManager = (eventlist, divRef) => {
    let event = eventlist.map((event) => (
      <Event
        height={eventlist.length > 3 ? 25 : 100 / eventlist.length - 4}
        eventDescription={event}
      />
    ));

    if (eventlist.length > 3) {
      event = event.slice(0, 3);
    }
    if (divRef.current) {
      const parentHeight = divRef.current.parentNode.clientHeight;
      divRef.current.style.maxHeight = `${parentHeight}px`;
    }
    return event;
  };
  const rowMaker = (start, end, day, events) => {
    const tempsRow = [];
    if (start !== -1) {
      for (let i = 0; i < 7; i++) {
        const dayBeforeMonth =
          new Date(
            month === 1
              ? new Date().getFullYear() - 1
              : new Date().getFullYear(),
            month === 1 ? 12 : month - 1,
            0
          ).getDate() -
          start +
          i +
          1;
        tempsRow.push(
          i < start ? (
            <TableCell sx={{ padding: 0, height: "auto" }}>
              <EventManager
                month={month === 1 ? monthNames[11] : monthNames[month - 2]}
                day={dayBeforeMonth}
                year={year}
                eventlist={events.filter(
                  (item) =>
                    item.date.substring(0, 10) ===
                    `${month === 1 ? year - 1 : year}-${
                      month === 1
                        ? 12
                        : month - 1 < 10
                        ? `0${month - 1}`
                        : month - 1
                    }-${
                      dayBeforeMonth < 10
                        ? `0${dayBeforeMonth}`
                        : dayBeforeMonth
                    }`
                )}
                eventManager={eventManager}
              />
            </TableCell>
          ) : (
            <TableCell sx={{ padding: 0, height: "auto" }}>
              <EventManager
                month={monthNames[month - 1]}
                day={i - start + 1}
                year={year}
                eventlist={events.filter(
                  (item) =>
                    item.date.substring(0, 10) ===
                    `${year}-${month < 10 ? `0${month}` : month}-${
                      i - start + 1 < 10 ? `0${i - start + 1}` : i - start + 1
                    }`
                )}
                eventManager={eventManager}
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
                month={month === 12 ? monthNames[0] : monthNames[month]}
                day={day + i - end}
                year={year}
                eventlist={events.filter(
                  (item) =>
                    item.date.substring(0, 10) ===
                    `${year}-${month + 1 < 10 ? `0${month + 1}` : month + 1}-${
                      day + i - end < 10 ? `0${day + i - end}` : day + i - end
                    }`
                )}
                eventManager={eventManager}
              />
            </TableCell>
          ) : (
            <TableCell sx={{ padding: 0, height: "auto" }}>
              <EventManager
                month={monthNames[month - 1]}
                day={day + i}
                year={year}
                eventlist={events.filter(
                  (item) =>
                    item.date.substring(0, 10) ===
                    `${year}-${month < 10 ? `0${month}` : month}-${
                      day + i < 10 ? `0${day + i}` : day + i
                    }`
                )}
                eventManager={eventManager}
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
              month={monthNames[month - 1]}
              day={day + i}
              year={year}
              eventlist={events.filter(
                (item) =>
                  item.date.substring(0, 10) ===
                  `${year}-${month < 10 ? `0${month}` : month}-${
                    day + i < 10 ? `0${day + i}` : day + i
                  }`
              )}
              eventManager={eventManager}
            />
          </TableCell>
        );
      }
    }
    return tempsRow;
  };
  const displayRow = (events) => {
    const DayInMonth = new Date(year, month, 0).getDate();
    const FirstDayOfTheMonth = new Date(year, month - 1, 1).getDay();
    const DayInFirstWeek =
      FirstDayOfTheMonth === 0 ? 6 : FirstDayOfTheMonth - 1;
    const howManyRow =
      100 / (Math.ceil((DayInMonth - (7 - DayInFirstWeek)) / 7) + 1);

    const tempsRow = [
      <RowMaker
        start={DayInFirstWeek}
        day={1}
        rowMaker={rowMaker}
        events={events}
        howManyRow={howManyRow}
      />,
    ];
    for (let i = -(DayInFirstWeek - 7) + 1; i < DayInMonth + 1; i += 7) {
      i > DayInMonth - 7
        ? tempsRow.push(
            <RowMaker
              day={i}
              end={DayInMonth}
              rowMaker={rowMaker}
              events={events}
              howManyRow={howManyRow}
            />
          )
        : tempsRow.push(
            <RowMaker
              day={i}
              rowMaker={rowMaker}
              events={events}
              howManyRow={howManyRow}
            />
          );
    }
    return tempsRow;
  };

  return { displayRow };
}

export default useDisplay;
