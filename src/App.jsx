import CalendarPage from './pages/calendar/CalendarPage.jsx';
import ListPage from './pages/list/ListPage';
import HomePage from './pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AdminPage from './pages/admin/AdminPage.jsx';
import ResultPage from './pages/post/results/ResultPage.jsx';
import PostPage from './pages/post/PostPage.jsx';
import BusinessPage from './pages/business/BusinessPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/post/results" element={<ResultPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/business" element={<BusinessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
