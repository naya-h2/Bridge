import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

function CalendarPage() {
  return (
    <>
      <Helmet>
        <title>캘린더 | Bridge</title>
      </Helmet>
      <Layout />
    </>
  );
}
export default CalendarPage;
