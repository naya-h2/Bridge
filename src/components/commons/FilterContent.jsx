import styled from 'styled-components';
import FilterButton from './FilterButton';
import SearchButton from './SearchButton';
import { useStore } from '../../stores';
import { useEffect } from 'react';

const FILTER_TYPE = [
  { type: '지원사업 유형', filterList: ['사업화', '행사∙네트워크', '시설∙공간∙보육', '멘토링∙컨설팅∙교육', '기술개발(R&D)', '융자', '인력', '글로벌 진출'] },
  { type: '주관기관', filterList: ['공공기관', '민간기관'], detail: ['중앙부처∙지자체', '교육기관'] },
];

const FilterContent = () => {
  const url = window.location.pathname;
  const { setSelectedList, setIsSearch } = useStore((state) => ({
    setSelectedList: state.setSelectedFilter,
    setIsSearch: state.setIsSearch,
  }));

  const handleSearchClick = () => {
    // console.log('검색!');
    // console.log(selectedList);
    setIsSearch(true);
  };

  useEffect(() => {
    setSelectedList([]);
  }, []);

  return (
    <FilterContainer $url={url}>
      {FILTER_TYPE.map((item) => (
        <FilterBox key={item.type} $type={item.type}>
          <FilterTitle>{item.type}</FilterTitle>
          <ListContainer>
            {item.filterList.map((filterName, idx) => (
              <FilterButton key={filterName} text={filterName} detailText={item.type === '주관기관' ? item.detail[idx] : null} />
            ))}
          </ListContainer>
          {item.type === '주관기관' && url === '/list' && (
            <SearchWrapper>
              <SearchButton handleClick={handleSearchClick} />
            </SearchWrapper>
          )}
        </FilterBox>
      ))}
    </FilterContainer>
  );
};

export default FilterContent;

const FilterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ $url }) => ($url === '/calendar' ? 'column' : 'row')};
  gap: ${({ $url }) => ($url === '/calendar' ? '32px' : '16px')};
`;
const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  min-width: 284px;
  width: ${({ $type }) => ($type === '지원사업 유형' ? '70%' : '30%')};
`;
const FilterTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #525252;
`;
const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
