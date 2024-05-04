import styled from 'styled-components';
import data from '../../data/listData';
import SectionLayout from './SectionLayout';
import BusinessCard from './BusinessCard';

function CardSection() {
  return (
    <SectionLayout title="모집 중인 사업">
      <ListContainer>
        {data.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </ListContainer>
    </SectionLayout>
  );
}
export default CardSection;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
