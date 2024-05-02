import Logout from 'Components/Auth/Logout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const SeparatorLine = styled.div`
  border-bottom: 0.5px solid black;
  width: 100%;
  margin-bottom: 20px;
`;
const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  margin-top: 15%;
  margin-bottom: 15%;
`;

const MenuItem = styled.button`
  height: 150px;
  width: 200px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const Admin = () => {
  const navigate = useNavigate();

  return (
    <>
      <Title>관리자 페이지</Title>
      <SeparatorLine />
      <MenuContainer>
        <MenuItem
          onClick={() => {
            navigate('/admin/manageusers');
          }}
        >
          회원 관리
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/admin/edithobby');
          }}
        >
          취미 수정
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/admin/edittheme');
          }}
        >
          테마 수정
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/admin/editmood');
          }}
        >
          분위기 수정
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/admin/postannouncement');
          }}
        >
          공지 등록
        </MenuItem>
      </MenuContainer>
      <Logout></Logout>
    </>
  );
};
export default Admin;
