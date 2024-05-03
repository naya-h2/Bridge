import styled from 'styled-components';
import FilterButton from './FilterButton';
import { useState } from 'react';

const FILTER_TYPE = [
  { type: '지원사업 유형', filterList: ['사업화', '행사∙네트워크', '시설∙공간∙보육', '멘토링∙컨설팅∙교육', '기술개발(R&D)', '융자', '인력', '글로벌 진출'] },
  { type: '주관기관', filterList: ['공공', '민간'], detail: ['중앙부처∙지자체∙공공기관', '민간기관∙교육기관'] },
];

const FilterContent = () => {
  const [selectedList, setSelectedList] = useState([]);
  const url = window.location.pathname;

  console.log(url);

  return (
    <FilterContainer $url={url}>
      {FILTER_TYPE.map((item) => (
        <FilterBox key={item.type} $type={item.type}>
          <FilterTitle>{item.type}</FilterTitle>
          <ListContainer>
            {item.filterList.map((filterName, idx) => (
              <FilterButton key={idx} text={filterName} detailText={item.type === '주관기관' ? item.detail[idx] : null} setSelectedList={setSelectedList} />
            ))}
          </ListContainer>
        </FilterBox>
      ))}
    </FilterContainer>
  );
};

export default FilterContent;

const FilterContainer = styled.div`
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
