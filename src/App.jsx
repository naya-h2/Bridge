import CalendarPage from "./pages/calendar/CalendarPage.jsx";
import ListPage from "./pages/list/ListPage";
import HomePage from "./pages/home/HomePage";
import {Route, Routes} from "react-router-dom";

function App(){
     return(
          <Routes>
               <Route path="/" element={<HomePage />}/>
               <Route path="/list" element={<ListPage/>}/>
               <Route path="/calendar" element={<CalendarPage/>}/>
          </Routes>
     )
}

export default App;