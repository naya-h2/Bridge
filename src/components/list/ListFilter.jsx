import styled from 'styled-components';
import { useState } from 'react';
import FilterButton from '../commons/FilterButton';
import SectionLayout from './SectionLayout';

const FILTER_TYPE = [
  { type: '지원사업 유형', filterList: ['사업화', '기술개발(R&D)', '시설∙공간∙보육', '멘토링∙컨설팅∙교육', '행사∙네트워크', '융자', '인력', '글로벌 진출'] },
  { type: '주관기관', filterList: ['공공', '민간'], detail: ['중앙부처∙지자체∙공공기관', '민간기관∙교육기관'] },
];

function ListFilter() {
  const [selectedList, setSelectedList] = useState([]);

  return (
    <SectionLayout title="필터">
      <FilterContainer>
        {FILTER_TYPE.map((item) => (
          <FilterBox key={item.type} $type={item.type}>
            <FilterTitle>{item.type}</FilterTitle>
            {console.log(item.filterList)}
            <ListContainer>
              {item.filterList.map((filterName, idx) => (
                <FilterButton key={idx} text={filterName} detailText={item.type === '주관기관' ? item.detail[idx] : null} setSelectedList={setSelectedList} />
              ))}
            </ListContainer>
          </FilterBox>
        ))}
      </FilterContainer>
    </SectionLayout>
  );
}
export default ListFilter;

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
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
