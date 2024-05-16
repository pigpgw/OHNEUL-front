import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Title } from 'Components/styles/Common';
import Header from 'Components/Common/Header/Header';
import Button from 'Components/Common/Button';
import { extractUserId } from '../utils/extractCookie';

function Nickname() {
  const [nickname, setNickname] = useState('');
  const userId = extractUserId();

  const fetchAddUserNickname = async (userMood: any): Promise<any> => {
    return axios.patch(
      `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
      userMood,
    );
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${userId}`,
      );
      console.log(response.data);
      return response.data;
    };
    fetchUser();
  }, []);

  const handleSubmit = async () => {
    try {
      console.log(nickname);
      await fetchAddUserNickname(nickname)
      setNickname('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Header nonvisible={true} />
      <Container>
        <Title>사용 할 닉네임을 입력해주세요</Title>
        <Wrapper>
          <P>닉네임</P>
          <Input
            type="text"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </Wrapper>
        <Button width="200px" height="40px" onClick={handleSubmit}>
          시작하기
        </Button>
      </Container>
    </>
  );
}

export default Nickname;

const Wrapper = styled.div`
  display: flex;
`;

const P = styled.p`
  margin: 5px 5px 0 0;
  font-weight: 800;
  font-size: 20px;
  padding: 10px;
  max-width: 50%;
`;

const Input = styled.input`
  height: 25px;
  margin: auto 0;
  border-radius: 10px;
  padding: 5px;
  color: black;
  font-size: 15px;
  font-weight: 800;
  background-color: lightgray;
  border: 0;
`;
