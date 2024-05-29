import styled from 'styled-components';
import { useStore } from '../../stores';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PROXY } from '../../constants/api';
import { useState } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const SIZE = 10;

function AiList() {
  const { setIsLogin } = useStore((state) => ({ setIsLogin: state.setIsLogin }));
  const [dataList, setDataList] = useState([]);

  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['ai'],
    queryFn: async ({ pageParam }) => {
      try {
        const res = await (await fetch(`${PROXY}/plan?page=${pageParam}`)).json();
        if (res.message) throw Error(res.message);
        pageParam === 0 ? setDataList(res.data) : setDataList((prev) => [...prev, ...res.data]);
        return { data: res.data, page: pageParam };
      } catch (error) {
        alert(error.message);
      }
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage?.data?.length === SIZE ? lastPage.page + 1 : null;
    },
  });

  const containerRef = useInfiniteScroll({ handleScroll: fetchNextPage, deps: [data] });

  return (
    <Container>
      <Category>
        <P>결제 시각</P>
        <P>아이템 소개</P>
        <P>이름</P>
        <P>이메일</P>
        <P>마케팅 동의</P>
        <P>독스훈트 전달</P>
      </Category>
      {dataList?.length > 0 &&
        dataList.map((item) => (
          <Data key={item.id}>
            <P>{item.id}</P>
            <P>{item.title}</P>
            <P>{item.term3}</P>
          </Data>
        ))}
      <div ref={containerRef} />
    </Container>
  );
}

export default AiList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  padding: 12px 24px;

  border-top: 1px solid #9d9a9a;
  background: #f7f7f8;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;

  display: flex;
`;

const P = styled.p`
  width: 30%;
  display: flex;
  align-items: center;
`;

const Data = styled.div`
  padding: 12px 24px;

  border-top: 1px solid #9d9a9a;
  background: white;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;

  display: flex;
`;
