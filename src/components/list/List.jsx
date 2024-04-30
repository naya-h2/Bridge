import { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../../data/listData';
import ListData from './ListData';
import SectionLayout from './SectionLayout';

function List() {
  return (
    <SectionLayout title="모집 중인 사업">
      <ListContainer>
        {data.map((business, idx) => (
          <ListData key={idx} business={business} />
        ))}
      </ListContainer>
    </SectionLayout>
  );
}
export default List;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
