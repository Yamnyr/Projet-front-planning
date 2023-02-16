import React, { useReducer } from "react";
import ScheduleComponent from "./ScheduleComponent";
import Groups from "./Groups/Groups";
import AdminButtons from "./AdminButtons";
import { CalendarContext } from "../../context/CalendarContext";
import reducer, { defaultState } from "../../reducer/CalendarReducer";

function SchedulePage() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log("ee");
  return (
    <CalendarContext.Provider value={{ ...state, dispatch }}>
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
          <ScheduleComponent />
        </div>
      </div>
    </CalendarContext.Provider>
  );
}

export default SchedulePage;
