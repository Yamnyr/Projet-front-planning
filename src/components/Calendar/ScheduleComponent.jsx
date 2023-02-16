import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CalendarTable from "./CalendarTable";
import MonthPicker from "./MonthPicker";
import useCalendar from "../../hooks/UseCalendar";

function ScheduleComponent({ month, year, updateDate, events, waiting }) {
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
        {waiting ? (
          <div
            style={{
              height: "100%",
              width: "40vw",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <CalendarTable month={month} year={year} events={events} />
        )}
      </div>
    </div>
  );
}

export default ScheduleComponent;
