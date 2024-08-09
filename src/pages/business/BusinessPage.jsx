import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

function BusinessPage() {
  return (
    <>
      <Helmet>
        <title>사계서 조회 | Bridge</title>
      </Helmet>
      <Layout />
    </>
  );
}

export default BusinessPage;
