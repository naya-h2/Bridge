import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

function BusinessPage() {
  return (
    <>
      <Helmet>
        <title>사계서 조회 | 브릿지AI 정부지원 캘린더</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Layout />
    </>
  );
}

export default BusinessPage;
