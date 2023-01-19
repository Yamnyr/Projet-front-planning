import "./App.css";
import CalendarTable from "./components/Calendar/CalendarTable";
import MonthPicker from "./components/Calendar/MonthPicker";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <MonthPicker />
      <CalendarTable />
    </div>
  );
}

export default App;
