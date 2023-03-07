import React, { useEffect } from "react";
import ScheduleComponent from "./ScheduleComponent";
import Groups from "./Groups/Groups";
import AdminButtons from "./AdminButtons";
import useCalendar from "../../hooks/UseCalendar.jsx";

function SchedulePage() {
  const { month, groups, year, events, waiting, updateDate, updateGroups } =
    useCalendar();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: "1",
          marginTop: "7vh",
          minWidth: "1024px",
        }}
      >
        <Groups groups={groups} updateGroups={updateGroups} />
        <ScheduleComponent
          month={month}
          year={year}
          updateDate={updateDate}
          events={events}
          waiting={waiting}
        />
      </div>
    </div>
  );
}

export default SchedulePage;
