import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

function BusinessPage() {
  return (
    <>
      <Helmet>
        <title>AI 사업계획서 | Bridge</title>
      </Helmet>
      <Layout />
    </>
  );
}

export default BusinessPage;
