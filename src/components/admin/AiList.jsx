import styled from 'styled-components';
import { useStore } from '../../stores';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PROXY } from '../../constants/api';
import { useState } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { Link } from 'react-router-dom';

const SIZE = 10;

function AiList() {
  const [dataList, setDataList] = useState([]);

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['ai'],
    queryFn: async ({ pageParam }) => {
      try {
        const res = await (await fetch(`${PROXY}/api/plan?page=${pageParam}`)).json();
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
      <Guide>ID값 누르면 상세 보기</Guide>
      <Category>
        <P>ID</P>
        <P>아이템 소개</P>
        <P>이름</P>
        <P>이메일</P>
        <P>마케팅 동의</P>
        <P>독스훈트 전달</P>
      </Category>
      {dataList?.length > 0 &&
        dataList.map(({ member, item }) => (
          <Data key={item.itemId}>
            <Link to={`${process.env.REACT_APP_BASE_URL}/api/plan/${item.itemId}`}>
              <P>{item.itemId}</P>
            </Link>
            <P>{item.title}</P>
            <P>{member.name}</P>
            <P>{member.email}</P>
            <P>{`${item.term3}`}</P>
          </Data>
        ))}
      {isLoading && <p>내역 불러오는 중..</p>}
      <div ref={containerRef} />
    </Container>
  );
}

export default AiList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Guide = styled.p`
  font-size: 12px;
  color: gray;

  margin-bottom: 8px;
`;

const Category = styled.div`
  padding: 12px 24px;

  border-top: 1px solid #9d9a9a;
  background: #f7f7f8;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const P = styled.p`
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

  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;
