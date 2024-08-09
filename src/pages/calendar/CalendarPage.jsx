import { Helmet } from 'react-helmet-async';
import Layout from './Layout';
import { META_TAG } from '../../constants/metaTag';

function CalendarPage() {
  return (
    <>
      <Helmet>
        <title>{META_TAG.calendar.title}</title>
        <meta name="title" content={META_TAG.calendar.title} />
        <meta name="description" content={META_TAG.calendar.description} />
        <meta name="og:title" content={META_TAG.calendar.title} />
        <meta name="og:description" content={META_TAG.calendar.description} />
      </Helmet>
      <Layout />
    </>
  );
}
export default CalendarPage;
