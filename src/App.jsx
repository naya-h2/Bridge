import CalendarPage from './pages/calendar/CalendarPage.jsx';
import ListPage from './pages/list/ListPage';
import HomePage from './pages/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import BoardPage from './pages/board/BoardPage.jsx';
import SettingPage from './pages/setting/SettingPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/board" element={<BoardPage />} />
      <Route path="/setting" element={<SettingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
