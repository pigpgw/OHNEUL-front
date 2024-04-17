/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const ItemBtn = styled.button<{ clicked?: boolean }>`
  height: 33px;
  border-radius: 10px;
  border: 0;
  padding: 0 15px;
  margin: 10px;
  font-size: 13px;

  background: white;
  box-shadow: 1px 1px 1px rgba(41, 41, 41, 0.25);

  ${({ clicked }) =>
    clicked &&
    css`
      background: #0075ff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: white;
    `}
`;

export const InfoText = styled.p`
  font-size: 13px;
`;

export const Container = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 570px;
  max-width: 500px;
`;

export const ThemeItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  height: 180px;
  max-width: 500px;
  margin: 40px 0 40px 0;
`;

export const ThemeItemBtn = styled.button<{ clicked?: boolean }>`
  height: 33px;
  border-radius: 10px;
  border: 0;
  padding: 0 10px;
  margin: 5px;
  font-size: 13px;

  background: white;
  box-shadow: 1px 1px 1px rgba(41, 41, 41, 0.25);

  ${({ clicked }) =>
    clicked &&
    css`
      background: #0075ff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: white;
    `}
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px 0 30px 0;
`;

export const SubmitBtn = styled.button`
  width: 330px;
  height: 43px;
  color: white;
  background: #0075ff;
  border-radius: 5px;
  border: 0;
  position: relative;

  /* iphone XR */
  @media screen and (width: 414px) and (height: 896px) {
    top: 25%;
  }

  /* iphone 12por */
  @media screen and (width: 390px) and (height: 844px) {
    top: 20%;
  }

  /* iphone 14pro */
  @media screen and (width: 430px) and (height: 932px) {
    top: 30%;
  }

  /* galaxy s8  */
  @media screen and (width: 360px) and (height: 740px) {
    top: 5%;
  }

  /* galaxy s20 ultra  */
  @media screen and (width: 412px) and (height: 915px) {
    top: 22%;
  }

  /* ipad mini  */
  @media screen and (width: 768px) and (height: 1024px) {
    top: 25%;
  }

  /* ipad air  */
  @media screen and (width: 820px) and (height: 1180px) {
    top: 50%;
  }

    /* ipad air  */
    @media screen and (width: 1024px) and (height: 1366px) {
    top: 55%;
  }
`;
export const MarginTag = styled.div<{ margin?: number | null }>`
  margin: ${(props) => (props.margin !== null ? `${props.margin}px` : '0px')};
`;
