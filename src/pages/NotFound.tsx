import styled from 'styled-components';
import { Container, Title } from 'Components/styles/Common';
import { FaRegSurprise } from '@react-icons/all-files/fa/FaRegSurprise';

function NotFound() {
  return (
    <Container>
      <IconNotFound></IconNotFound>
      <Title>잘못된 경로의 페이지입니다.</Title>
    </Container>
  );
}

export default NotFound;

const IconNotFound = styled(FaRegSurprise)`
  font-size: 200px;
  margin: 20px;
`;
