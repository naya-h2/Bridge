import menu1 from '../../assets/icon/side-home.svg';
import menu2 from '../../assets/icon/side-calendar.svg';
import menu3 from '../../assets/icon/side-ai.svg';
import menu4 from '../../assets/icon/side-list.svg';
import menu5 from '../../assets/icon/side-setting.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const menuList = [
  { icon: menu2, text: '캘린더', url: '/calendar' },
  { icon: menu3, text: 'AI 사업계획서', url: '/business' },
  { icon: menu4, text: '지원사업 리스트', url: '/list' },
];

function MiddleContainer({ index }) {
  let navigate = useNavigate();
  return (
    <Container>
      {menuList.map((menu, idx) => (
        <Menu key={idx} color={idx === index ? '#ECECEC' : null} onClick={() => navigate(menu.url)}>
          <Icon src={menu.icon} />
          <P $selected={idx === index}>{menu.text}</P>
        </Menu>
      ))}
    </Container>
  );
}

export default MiddleContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Menu = styled.div`
  padding: 12px 37px;

  display: flex;
  align-items: center;
  gap: 12px;

  height: 48px;
  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
    background-color: #ececec;
  }
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const P = styled.p`
  font-weight: ${({ $selected }) => ($selected ? '600' : '500')};
  font-size: 16px;
  letter-spacing: -0.32px;
  text-align: center;
  color: ${({ $selected }) => ($selected ? '#000000' : '#525252')};
`;
