import Star from 'Components/Common/Star';
import { styled } from 'styled-components';

type ProfileProps = {
  reviewScore: number;
  favorite: string;
  mood: string;
  handleModal: () => void;
};

const ProfileModal = ({
  reviewScore,
  favorite,
  mood,
  handleModal,
}: ProfileProps) => {
  return (
    <ProfileContainer>
      <ModalBtn
        onClick={() => {
          handleModal();
        }}
      >
        X
      </ModalBtn>
      <ModalTitle>별점</ModalTitle>
      <Star score={reviewScore} />
      <InfoText>관심사 : {favorite}</InfoText>
      <InfoText>기분 : {mood}</InfoText>
    </ProfileContainer>
  );
};

export default ProfileModal;

const ProfileContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid black;
  padding: 1vh 5vh;
  border-radius: 20px;
`;

const ModalBtn = styled.button`
  font-size: 1.5vh;
  font-weight: 900;
  border: 0;
  background-color: white;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
`;


export const InfoText = styled.p`
  font-size: 1.5vh;
  font-family: sans-serif;
`;
