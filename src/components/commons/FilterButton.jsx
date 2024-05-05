import { useState } from 'react';
import styled from 'styled-components';
import switchG from '../../assets/icon/switch-grey.svg';
import switchB from '../../assets/icon/switch-blue.svg';
import { useStore } from '../../stores';

const FilterButton = ({ text, detailText }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { selectedList, setSelectedList } = useStore((state) => ({ selectedList: state.selectedFilter, setSelectedList: state.setSelectedFilter }));

  const handleButtonClick = () => {
    setIsSelected((prev) => !prev);
    if (isSelected) return setSelectedList(selectedList.filter((item) => item !== text));
    setSelectedList([...selectedList, text]);
  };

  return (
    <Button onClick={handleButtonClick} $selected={isSelected}>
      <Switch src={isSelected ? switchB : switchG} />
      {text}
      {detailText && <Detail>{` (${detailText})`}</Detail>}
    </Button>
  );
};

export default FilterButton;

const Button = styled.button`
  padding: 8px;
  padding-right: 16px;
  padding-left: 12px;

  display: flex;
  align-items: center;
  gap: 8px;

  background: #ffffff;
  border: 1px solid ${({ $selected }) => ($selected ? '#3686FF' : '#DCDCDC')};
  border-radius: 40px;

  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;

  cursor: pointer;
  &:hover {
    background-color: #ececec5e;
  }
`;
const Switch = styled.img`
  width: 24px;
  height: 24px;
`;
const Detail = styled.p`
  color: #525252;
  white-space: nowrap;
`;
