import { Helmet } from 'react-helmet-async';
import Layout from './Layout';
import { META_TAG } from '../../constants/metaTag';

function ListPage() {
  return (
    <>
      <Helmet>
        <title>{META_TAG.list.title}</title>
        <meta name="title" content={META_TAG.list.title} />
        <meta name="description" content={META_TAG.list.description} />
        <meta name="og:title" content={META_TAG.list.title} />
        <meta name="og:description" content={META_TAG.list.description} />
      </Helmet>
      <Layout />
    </>
  );
}
export default ListPage;
