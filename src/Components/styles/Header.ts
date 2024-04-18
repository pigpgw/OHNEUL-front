import styled from 'styled-components';
import { IoPersonOutline } from '@react-icons/all-files/io5/IoPersonOutline';
import { GiExitDoor } from '@react-icons/all-files/gi/GiExitDoor';
import { RiAlarmWarningFill } from "@react-icons/all-files/ri/RiAlarmWarningFill";

export const HeaderContainer = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const LogoContainer = styled.div`
  display: flex;
`;
export const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 15px 0 0px 12px;
`;
export const LogoTitle = styled.p`
  font-weight: 400;
  width: 91px;
  height: 26px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: black;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
export const CashContainer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CashIcon = styled.img`
  width: 17px;
  margin-right: 3px;
  margin: 2px 5px;
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
  margin: 4px 7px 2px 10px;
  font-size: 28px;
  color: gray;
`;
