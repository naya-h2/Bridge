import styled from 'styled-components';
import loadingBlock from '../../assets/icon/loading-block.svg';

function PageLoading() {
  return (
    <Background>
      <Img src={loadingBlock} />
    </Background>
  );
}

export default PageLoading;

const Background = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: black;
  opacity: 60%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

const Img = styled.img`
  z-index: 200;

  width: 64px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
