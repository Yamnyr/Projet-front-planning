import React from "react";
import ScheduleComponent from "./ScheduleComponent";
import Groups from "./Groups/Groups";
import AdminButtons from "./AdminButtons";
import useCalendar from "../../hooks/UseCalendar.jsx";

function SchedulePage() {
  const { month, year, updateDate, displayRow } = useCalendar();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AdminButtons />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: "1",
          marginTop: "7vh",
        }}
      >
        <Groups />
        <ScheduleComponent
          displayRow={displayRow}
          month={month}
          year={year}
          updateDate={updateDate}
        />
      </div>
    </div>
  );
}

export default SchedulePage;
