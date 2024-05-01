import { useNavigate } from 'react-router-dom';
import { Content, Wrapper } from 'Components/styles/Common';
import { styled } from 'styled-components';
import Arrow from '../../../assets/images/Arrow.png';

function GoBackHeader() {
  const navigate = useNavigate();
  const goMtpage = () => {
    navigate('/mypage');
  };
  return (
    <Wrapper display="flex" alignItems="center" onClick={goMtpage}>
      <Icon src={Arrow} alt="" />
      <Content fonstWeight="700"> 돌아가기 </Content>
    </Wrapper>
  );
}

export default GoBackHeader;

const Icon = styled.img`
  font-size: 30px;
  margin: 10px;
`;
