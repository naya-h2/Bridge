import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/sidebar/Sidebar';
import ReadyPage from '../ReadyPage';

function BoardPage() {
  return (
    <>
      <Helmet>
        <title>홈 대시보드 | Bridge</title>
      </Helmet>
      <Sidebar index={0} />
      <ReadyPage />
    </>
  );
}

export default BoardPage;
