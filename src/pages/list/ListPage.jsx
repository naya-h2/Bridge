import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

function ListPage() {
  return (
    <>
      <Helmet>
        <title>지원사업 리스트 | Bridge</title>
      </Helmet>
      <Layout />
    </>
  );
}
export default ListPage;
