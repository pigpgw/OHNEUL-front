import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  border-radius: 5px;
  width: 70%;
  min-width: 300px;
`;
export const SocialContainer = styled.div`
  position: relative;
`;
export const InterestSection = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  display: flex;
`;

export const MyMoodSection = styled.div`
  margin-top: 10px;
  text-align: left;
  display: flex;
`;
export const StarAndInterest = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const StarRatingSection = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const Title = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid #dbdbdb;
  width: 100%;
  font-size: 3vh;
  font-weight: 600;
`;

export const TabSection = styled.div`
  margin-top: 10px;
  width: 100%;
`;
export const Tab = styled.div<{ last?: string }>`
  text-align: left;
  font-size: 2vh;
  border-top: 2px solid #dbdbdb;
  border-bottom: ${(props) => (props.last ? '1px solid #dbdbdb' : 'none')};
  border-left: none;
  border-right: none;
  padding: 2vh 1vh;
  margin: 0;
  cursor: pointer;
`;
export const TabTitle = styled.div`
  text-align: left;
  border: 2px solid #dbdbdb;
  padding: 10px;
`;
export const ContentContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const AuthContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  min-width: 350px;
`;
export const LogoutCont = styled.div`
  margin-right: 30px;
`;
export const AdminCont = styled.div`
  margin-right: 10px;
`;

export const WithDrawalCont = styled.div`
  margin-left: 30px;
`;
