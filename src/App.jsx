import './App.css'
import CalendarTable from "./components/CalendarTable";
import EventManager from "./components/EventManager";
import EventAdd from "./components/EventAdd";

function App() {

  return (
      <div style={{height: "100%"}}>
        {/*<CalendarTable/>*/}
          <EventAdd></EventAdd>
      </div>
  )
}

export default App
