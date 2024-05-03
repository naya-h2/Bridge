import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../assets/icon/search.svg';

const SearchButton = () => {
  return (
    <Button>
      <img src={searchIcon} />
    </Button>
  );
};

export default SearchButton;

const Button = styled.button`
  width: 46px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  border: 1px solid #3686ff;
  background: #3686ff;

  cursor: pointer;
  &:hover {
    background: #287eff;
  }
`;
