import React, { useEffect } from "react";
import CalendarTable from "./CalendarTable";
import MonthPicker from "./MonthPicker";
import useCalendar from "../../hooks/UseCalendar";

function ScheduleComponent() {
  const { setDefault } = useCalendar();

  useEffect(() => {
    setDefault();
  }, []);
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
        <MonthPicker />
        <CalendarTable />
      </div>
    </div>
  );
}

export default ScheduleComponent;
