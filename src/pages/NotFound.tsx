import styled from 'styled-components';
import { Container, Title } from 'Components/styles/Common';
import { FaRegSurprise } from '@react-icons/all-files/fa/FaRegSurprise';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <motion.div
      className="loginPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <IconNotFound></IconNotFound>
        <Title>잘못된 경로의 페이지입니다.</Title>
      </Container>
    </motion.div>
  );
}

export default NotFound;

const IconNotFound = styled(FaRegSurprise)`
  font-size: 200px;
  margin: 20px;
`;
