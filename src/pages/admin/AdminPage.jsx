import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

function AdminPage() {
  return (
    <>
      <Helmet>
        <title>관리자 페이지 | Bridge</title>
      </Helmet>
      <Layout />
    </>
  );
}

export default AdminPage;
