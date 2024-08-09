import React, { useEffect } from 'react';
import { useRefreshToken } from '../../hooks/useRefreshToken';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../stores';
import { useQuery } from '@tanstack/react-query';
import { PROXY } from '../../constants/api';
import styled from 'styled-components';

function Layout() {
  useRefreshToken();
  const { isLogin, accessToken } = useStore((state) => ({
    isLogin: state.isLogin,
    accessToken: state.accessToken,
  }));
  const url = new URL(window.location.href);
  const id = url.searchParams.get('id');
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['aiPost', id],
    queryFn: async () => {
      const res = await (
        await fetch(`${PROXY}/admin/plan/${id}`, {
          headers: {
            Authorization: accessToken,
            credentials: 'include',
          },
        })
      ).json();
      const user = [
        {
          type: '이름',
          value: res.user.name,
        },
        {
          type: '이메일',
          value: res.user.email,
        },
        {
          type: '생일',
          value: res.user.birth,
        },
        {
          type: '전화번호',
          value: res.user.phoneNumber,
        },
      ];
      const item = [
        {
          type: '지원사업명',
          value: res.item.title,
        },
        {
          type: '01. 아이템 한 줄 소개(필수)',
          value: res.item.input1,
        },
        {
          type: '02. 아이템 설명(필수)',
          value: res.item.input2,
        },
        {
          type: '03. 창업 아이템을 개발하게 된 내부적 동기(선택)',
          value: res.item.input3,
        },
        {
          type: '04. 타겟군, 타겟시장 정보(선택)',
          value: res.item.input4,
        },
        {
          type: '05. 경쟁사 및 비교분석(선택)',
          value: res.item.input5,
        },
      ];
      return { user, item };
    },
  });

  useEffect(() => {
    if (!isLogin) navigate('/404');
  }, [isLogin]);

  return (
    <>
      {isLoading && <div>로딩중...</div>}
      {isSuccess && data && (
        <Container>
          <Title>주문자 정보</Title>
          {data.user.map((item) => (
            <div>
              <TypeTitle>{item.type}</TypeTitle>
              <InfoBox>{item.value}</InfoBox>
            </div>
          ))}
          <Title>사업계획서 정보</Title>
          {data.item.map((info) => (
            <div>
              <TypeTitle>{info.type}</TypeTitle>
              <InfoBox>{info.value}</InfoBox>
            </div>
          ))}
        </Container>
      )}
    </>
  );
}

export default Layout;

const Container = styled.div`
  margin: 32px 24px;
`;

const Title = styled.h1`
  margin-top: 32px;
  font-size: 2.4rem;
`;

const TypeTitle = styled.h3`
  margin-top: 12px;
  margin-bottom: 4px;
  font-size: 1.4rem;
  font-weight: 500;
`;

const InfoBox = styled.p`
  width: 540px;

  border: 1px solid #3686ff8f;
  border-radius: 8px;
  padding: 8px;

  font-size: 1.4rem;
`;
