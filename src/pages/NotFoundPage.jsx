import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 | Bridge</title>
      </Helmet>
      <div>해당 페이지를 찾을 수 없습니다💦</div>
    </>
  );
};

export default NotFoundPage;
