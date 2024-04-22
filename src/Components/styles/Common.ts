/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const ItemBtn = styled.button<{ clicked?: boolean }>`
  border-radius: 10px;
  border: 0;
  padding: 1.2vh 1.5vh;
  margin: 1vh;
  font-size: 1.7vh;
  font-family: sans-serif;

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
  font-family: sans-serif;
`;

export const Container = styled.div`
  width: 95%;
  height: 80vh;

  /* iphone se */
  @media screen and (width: 375px) and (height: 667px) {
    height: 95vh;
  }

  /* galaxy s8  */
  @media screen and (width: 360px) and (height: 740px) {
    height: 93vh;
  }

  /* iphone 12por */
  @media screen and (width: 390px) and (height: 844px) {
    height: 83vh;
  }

  /* galaxy s20 ultra  */
  @media screen and (width: 412px) and (height: 915px) {
    height: 93vh;
  }
  /* iphone XR */
  @media screen and (width: 414px) and (height: 896px) {
    height: 95vh;
  }

  /* iphone 14pro */
  @media screen and (width: 430px) and (height: 932px) {
    height: 82vh;
  }

  /* ipad mini  */
  @media screen and (width: 768px) and (height: 1024px) {
    height: 90vh;
  }

  /* ipad air  */
  @media screen and (width: 820px) and (height: 1180px) {
    height: 90vh;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  /* height: 570px; */
  max-width: 500px;
`;

export const ThemeItemContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 500px;
  margin: 40px 0 40px 0;
`;

export const ThemeItemBtn = styled.button<{ clicked?: boolean }>`
  border-radius: 10px;
  border: 0;
  padding: 1.2vh 1.5vh;
  margin: 1vh;
  font-size: 1.6vh;

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
  font-size: 2.5vh;
  font-weight: 600;
  position: relative;
  top: 8%;
  font-family: sans-serif;
`;

export const ItemContainer = styled.div`
  width: 80%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 500px;
  margin: 40px 0 40px 0;
`;

export const SubmitBtn = styled.button`
  width: 330px;
  height: 43px;
  color: white;
  background: #0075ff;
  border-radius: 5px;
  border: 0;
  position: relative;
`;
export const MarginTag = styled.div<{ margin?: number | null }>`
  margin: ${(props) => (props.margin !== null ? `${props.margin}px` : '0px')};
`;
