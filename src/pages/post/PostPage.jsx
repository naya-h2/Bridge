import { Helmet } from 'react-helmet-async';
import Layout from './Layout';
import { META_TAG } from '../../constants/metaTag';

function PostPage() {
  return (
    <>
      <Helmet>
        <title>{META_TAG.post.title}</title>
        <meta name="title" content={META_TAG.post.title} />
        <meta name="description" content={META_TAG.post.description} />
        <meta name="og:title" content={META_TAG.post.title} />
        <meta name="og:description" content={META_TAG.post.description} />
      </Helmet>
      <Layout />
    </>
  );
}

export default PostPage;
