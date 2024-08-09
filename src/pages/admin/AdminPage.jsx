import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

function AdminPage() {
  return (
    <>
      <Helmet>
        <title>관리자 페이지 | 브릿지AI 정부지원 캘린더</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Layout />
    </>
  );
}

export default AdminPage;
