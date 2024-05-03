import styled from 'styled-components';
import { useState } from 'react';
import FilterButton from '../commons/FilterButton';
import SectionLayout from './SectionLayout';
import FilterContent from '../commons/FilterContent';

function ListFilter() {
  return (
    <SectionLayout title="필터">
      <FilterContent />
    </SectionLayout>
  );
}
export default ListFilter;
