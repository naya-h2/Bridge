import styled from 'styled-components';
import { useStore } from '../../stores';

const data = [
  {
    id: 3,
    title: '3번',
    types: ['글로벌 진출'],
    deadline: '2024-08-15',
    agent: 'agent',
    link: '/',
    star: false,
    dday: 102,
  },
  {
    id: 2,
    title: '2번',
    types: ['인력', '융자'],
    deadline: '2024-08-10',
    agent: 'agent',
    link: '/',
    star: false,
    dday: 97,
  },
  {
    id: 1,
    title: 'title',
    types: ['인력'],
    deadline: '2050-08-10',
    agent: 'agent',
    link: '/',
    star: false,
    dday: 9593,
  },
];

function BusinessEditList() {
  const { setIsLogin } = useStore((state) => ({ setIsLogin: state.setIsLogin }));

  const handleEditClick = (data) => {
    window.sessionStorage.setItem('admin_edit', JSON.stringify(data));
    setIsLogin('edit_post');
  };

  return (
    <Container>
      <Category>
        <P>등록 id</P>
        <P>지원사업명</P>
        <P>주최기관</P>
      </Category>
      {data.map((item) => (
        <Data key={item.id}>
          <P>{item.id}</P>
          <P>{item.title}</P>
          <P>{item.agent}</P>
          <Btn onClick={() => handleEditClick(item)}>수정</Btn>
        </Data>
      ))}
      <Data></Data>
    </Container>
  );
}

export default BusinessEditList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Category = styled.div`
  padding: 12px 24px;

  border-top: 1px solid #9d9a9a;
  background: #f7f7f8;

  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;

  display: flex;
`;

const P = styled.p`
  width: 30%;
  display: flex;
  align-items: center;
`;

const Data = styled.div`
  padding: 12px 24px;

  border-top: 1px solid #9d9a9a;
  background: white;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;

  display: flex;
`;

const Btn = styled.button`
  padding: 8px 20px;

  border-radius: 40px;
  background: rgba(46, 47, 51, 0.88);

  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;
