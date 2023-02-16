import React, { useContext } from "react";
import RowMaker from "../components/Calendar/RowMaker";
import { CalendarContext } from "../context/CalendarContext";

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

function useDisplayCalendar() {
  console.log(useContext(CalendarContext));
  const { state } = useContext(CalendarContext);
  console.log(state);
  const displayRow = () => {
    console.log(month);
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
            />
          )
        : tempsRow.push(
            <RowMaker month={month} day={i} monthNames={monthNames} />
          );
    }
    return tempsRow;
  };

  return { displayRow };
}

export default useDisplayCalendar();
