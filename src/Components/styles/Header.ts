import styled from 'styled-components';
import { GiExitDoor } from '@react-icons/all-files/gi/GiExitDoor';
import { IoExitOutline } from "@react-icons/all-files/io5/IoExitOutline";
import { RiAlarmWarningFill } from '@react-icons/all-files/ri/RiAlarmWarningFill';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  padding-bottom: 1.5vh;
`;
export const LogoContainer = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
`;
export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 15px 0 0px 12px;
`;
export const LogoTitle = styled.p`
  width: 10vh;
  font-size: 20px;
  font-family: 'Kodchasan', sans-serif;
  font-weight: 700;

  color: black;
  position: relative;
  top: 1.1vh;
`;

export const TimerContainer = styled.div`
  width: 33%;
  margin-top: 1.5vh;
`;

export const InfoContainer = styled.div`
  width: 33%;
  display: flex;
  font-weight: 500;
`;
export const CashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
export const CashIcon = styled.img`
  width: 17px;
  margin: 2vh 1vh 1vh 1vh;
`;
export const CashAmount = styled.p`
  font-size: 2vh;
  font-weight: 800;
  font-family: sans-serif;
  margin: 1.2vh 0 0 0;
`;

export const IconExit = styled(IoExitOutline)`
  margin: 1.5vh 7px 2px 10px;
  font-size: 4vh;
  color: gray;
  transform: rotate(180deg);
`;
export const IconReport = styled(RiAlarmWarningFill)`
  margin: 2vh 7px 1.5vh 10px;
  font-size: 4vh;
  color: gray;
`;
