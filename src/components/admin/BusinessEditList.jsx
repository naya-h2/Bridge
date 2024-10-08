import styled from 'styled-components';
import { useStore } from '../../stores';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PROXY } from '../../constants/api';
import { useState } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import PageLoading from '../commons/PageLoading';

const SIZE = 10;

function BusinessEditList() {
  const { setIsLogin } = useStore((state) => ({ setIsLogin: state.setIsLogin }));
  const [dataList, setDataList] = useState([]);

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['business'],
    queryFn: async ({ pageParam }) => {
      try {
        const res = await (await fetch(`${PROXY}/api/business/byFilterAndSortingNew?page=${pageParam}`)).json();
        if (res.message) throw Error(res.message);
        pageParam === 0 ? setDataList(res.data) : setDataList((prev) => [...prev, ...res.data]);
        return { data: res.data, page: pageParam };
      } catch (err) {
        alert(err.message);
      }
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage?.data?.length === SIZE ? lastPage.page + 1 : null;
    },
  });

  const containerRef = useInfiniteScroll({ handleScroll: fetchNextPage, deps: [data] });

  const handleEditClick = (data) => {
    window.sessionStorage.setItem('admin_edit', JSON.stringify(data));
    setIsLogin('edit_post');
  };

  const handleDelClick = async (id) => {
    const res = await fetch(`${PROXY}/api/business/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) alert('삭제가 왼료되었습니다.');
    else alert('삭제를 실패하였습니다.');
    window.location.reload();
  };

  return (
    <Container>
      <Category>
        <P>등록 id</P>
        <P>지원사업명</P>
        <P>주최기관</P>
      </Category>
      {dataList?.length > 0 &&
        dataList.map((item) => (
          <Data key={item.id}>
            <P>{item.id}</P>
            <P>{item.title}</P>
            <P>{item.agent}</P>
            <Btn onClick={() => handleEditClick(item)}>수정</Btn>
            <Btn onClick={() => handleDelClick(item.id)}>삭제</Btn>
          </Data>
        ))}
      <div ref={containerRef} />
      {isLoading && <PageLoading />}
    </Container>
  );
}

export default BusinessEditList;

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

  overflow: hidden;
`;

const Data = styled.div`
  padding: 12px 24px;

  border-top: 1px solid #9d9a9a;
  background: white;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;

  display: flex;
  gap: 8px;
  align-items: center;
`;

const Btn = styled.button`
  height: 36px;
  width: 66px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  background: rgba(46, 47, 51, 0.88);

  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;
