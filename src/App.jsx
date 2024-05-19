import CalendarPage from './pages/calendar/CalendarPage.jsx';
import ListPage from './pages/list/ListPage';
import HomePage from './pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import BusinessPage from './pages/business/BusinessPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/business" element={<BusinessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
