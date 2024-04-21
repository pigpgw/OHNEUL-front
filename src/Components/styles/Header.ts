import styled, { keyframes } from 'styled-components';
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';
import { GiExitDoor } from '@react-icons/all-files/gi/GiExitDoor';
import { RiAlarmWarningFill } from '@react-icons/all-files/ri/RiAlarmWarningFill';

export const HeaderContainer = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  top: 1vh;
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
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
export const CashIcon = styled.img`
  width: 17px;
  margin-right: 3px;
  margin: 5px 5px;
`;
export const CashAmount = styled.p`
  font-size: 13px;
  font-weight: 600;
`;
export const IconPerson = styled(IoPersonOutline)`
  font-size: 28px;
  margin: 10px 10px 5px 5px;
  color: gray;
`;

export const IconExit = styled(GiExitDoor)`
  margin: 7px 7px 2px 10px;
  font-size: 28px;
  color: gray;
`;
export const IconReport = styled(RiAlarmWarningFill)`
  margin: 8px 7px 2px 10px;
  font-size: 28px;
  color: gray;
`;
