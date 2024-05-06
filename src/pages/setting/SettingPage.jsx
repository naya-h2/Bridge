import { Helmet } from 'react-helmet-async';
import Sidebar from '../../components/sidebar/Sidebar';
import ReadyPage from '../ReadyPage';

function SettingPage() {
  return (
    <>
      <Helmet>
        <title>설정 | Bridge</title>
      </Helmet>
      <Sidebar index={3} />
      <ReadyPage />
    </>
  );
}

export default SettingPage;
