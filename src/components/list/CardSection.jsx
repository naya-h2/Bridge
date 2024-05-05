import styled from 'styled-components';
import SectionLayout from './SectionLayout';
import BusinessCard from './BusinessCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import bottomArrow from '../../assets/icon/arrow_bottom.svg';
import { useEffect, useState } from 'react';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useStore } from '../../stores';
import { FilterIndex } from '../../constants/filterType';

const SORT_TYPE_URL = {
  '마감 임박순': '/byDeadline',
  '최신 등록순': '/byNew',
};

const SORT_TYPE = ['마감 임박순', '최신 등록순'];

const SIZE = 10;

function CardSection() {
  const [sort, setSort] = useState('마감 임박순');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [cardList, setCardList] = useState([]);
  const [idxString, setIdxString] = useState('');

  const { selectedList, isSearchClick, setIsSearchClick } = useStore((state) => ({
    selectedList: state.selectedFilter,
    isSearchClick: state.isSearch,
    setIsSearchClick: state.setIsSearch,
  }));

  const makeIdxString = () => {
    let filterQueryString = '';
    const idxArr = selectedList.map((type) => FilterIndex.findIndex((item) => item === type));

    for (let idx of idxArr) {
      filterQueryString += `idx=${idx}&`;
    }
    setIdxString(filterQueryString);
  };

  const { data, isLoading, isSuccess, fetchNextPage, refetch } = useInfiniteQuery({
    queryKey: ['business'],
    queryFn: async ({ pageParam }) => {
      const res = await (
        await fetch(idxString !== '' ? `/business/byFilter?page=${pageParam}&${idxString}` : `/business${SORT_TYPE_URL[sort]}?page=${pageParam}`)
      ).json();
      pageParam === 0 ? setCardList(res.data) : setCardList((prev) => [...prev, ...res.data]);
      // const res = await fetch('/business', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   body: JSON.stringify({
      //     title: '이거왜이래!',
      //     types: ['사업화', '융자', '인력', '민간기관'],
      //     deadline: '2024-06-12',
      //     agent: '기관이름22',
      //     link: '/',
      //   }),
      // });
      return { data: res.data, page: pageParam };
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage.data.length === SIZE ? lastPage.page + 1 : null;
    },
  });
  const containerRef = useInfiniteScroll({ handleScroll: fetchNextPage, deps: [data] });

  useEffect(() => {
    setIdxString('');
    makeIdxString();
    setIsSearchClick(false);
  }, [isSearchClick]);

  useEffect(() => {
    setCardList([]);
    refetch();
  }, [idxString, sort]);

  const handleSortClick = (type) => {
    setIsSortOpen(false);
    setSort(type);
  };

  console.log(cardList);

  return (
    <SectionLayout title="모집 중인 사업">
      {idxString === '' && (
        <SortWrapper>
          <SortBox>
            <div>{sort}</div>
            {isSortOpen && (
              <SortDropDown>
                {SORT_TYPE.map((type) => (
                  <SortType key={type} onClick={() => handleSortClick(type)}>
                    {type}
                  </SortType>
                ))}
              </SortDropDown>
            )}
          </SortBox>
          <SortButton onClick={() => setIsSortOpen((prev) => !prev)}>
            <img src={bottomArrow} alt="정렬 종류 펼쳐보기" />
          </SortButton>
        </SortWrapper>
      )}
      <ListContainer>
        {isSuccess && cardList.length === 0 && <NoInfoMsg>해당 데이터가 없습니다.</NoInfoMsg>}
        {cardList.length > 0 && cardList.map((business) => <BusinessCard key={business.id} business={business} />)}
        {isLoading && <div>로딩중....</div>}
        <div ref={containerRef} />
      </ListContainer>
    </SectionLayout>
  );
}
export default CardSection;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SortWrapper = styled.div`
  height: 20px;
  margin-top: -20px;

  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: end;
`;

const SortButton = styled.button`
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SortType = styled.div`
  width: 100%;
  padding: 6px;
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: #ececec;
  }
`;

const SortBox = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  color: #525252;
  font-size: 16px;
  font-weight: 500;
`;

const SortDropDown = styled.div`
  width: 108px;

  position: absolute;
  top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);

  overflow: hidden;

  z-index: 2;
`;

const NoInfoMsg = styled.div`
  margin-top: 72px;

  font-weight: 500;
`;
