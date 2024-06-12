import CalendarPage from './pages/calendar/CalendarPage.jsx';
import ListPage from './pages/list/ListPage';
import HomePage from './pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import BusinessPage from './pages/post/BusinessPage.jsx';
import AdminPage from './pages/admin/AdminPage.jsx';
import ResultPage from './pages/post/results/ResultPage.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import styled from 'styled-components';

const SIDEBAR_PATH = ['/calendar', '/post', '/list'];

function App() {
  const path = window.location.pathname;

  console.log(SIDEBAR_PATH.indexOf(path));

  return (
    <Wrapper>
      {SIDEBAR_PATH.includes(path) && <Sidebar index={SIDEBAR_PATH.indexOf(path)} />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/post/results" element={<ResultPage />} />
        <Route path="/post" element={<BusinessPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  min-width: 1020px;
`;
