import React, { useEffect, useState } from "react";
import RowMaker from "../components/Calendar/RowMaker";
import Event from "../components/Calendar/Event.jsx";
import ButtonEvent from "../components/Calendar/ButtonEvent.jsx";

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

function useCalendar() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [groups, setGroups] = useState([]);
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   setEvents();
  //   );
  // }, [groups]);

  const updateDate = (date) => {
    setMonth(date.$d.getMonth() + 1);
    setYear(date.$d.getFullYear());
  };

  const displayRow = () => {
    const DayInMonth = new Date(year, month, 0).getDate();
    const FirstDayOfTheMonth = new Date(year, month - 1, 1).getDay();
    const DayInFirstWeek =
      FirstDayOfTheMonth === 0 ? 6 : FirstDayOfTheMonth - 1;

    const tempsRow = [
      <RowMaker
        start={DayInFirstWeek}
        month={month}
        day={1}
        monthNames={monthNames}
        year={year}
      />,
    ];
    for (let i = -(DayInFirstWeek - 7) + 1; i < DayInMonth + 1; i += 7) {
      i > DayInMonth - 7
        ? tempsRow.push(
            <RowMaker
              month={month}
              day={i}
              end={DayInMonth}
              monthNames={monthNames}
              year={year}
            />
          )
        : tempsRow.push(
            <RowMaker
              month={month}
              day={i}
              monthNames={monthNames}
              year={year}
            />
          );
    }
    return tempsRow;
  };

  return { month, year, groups, events, updateDate, displayRow };
}

export default useCalendar;
