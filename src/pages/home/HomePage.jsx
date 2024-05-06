import Layout from './Layout';
import { Helmet } from 'react-helmet-async';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Bridge</title>
      </Helmet>
      <Layout />
    </>
  );
}
export default HomePage;
