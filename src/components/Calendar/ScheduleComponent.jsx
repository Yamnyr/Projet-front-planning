import React from "react";
import CalendarTable from "./CalendarTable";
import MonthPicker from "./MonthPicker";
import useCalendar from "../../hooks/UseCalendar";

function ScheduleComponent({ month, year, displayRow, updateDate }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexGrow: "1",
      }}
    >
      <div>
        <MonthPicker month={month} year={year} updateDate={updateDate} />
        <CalendarTable displayRow={displayRow} month={month} year={year} />
      </div>
    </div>
  );
}

export default ScheduleComponent;
