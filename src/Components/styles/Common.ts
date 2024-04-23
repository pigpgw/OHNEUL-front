/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  /* height: 570px; */
  max-width: 700px;
`;

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

export const ThemeItemContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
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

export const InfoTitleContainer = styled.div`
  position: relative;
  top: 7%;
`;

export const InfoContainer = styled.div`
  position: relative;
  top: 7%;
`;

export const Title = styled.p`
  font-size: 2.5vh;
  font-weight: 600;
  margin: 0;
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

export const InfoContent = styled.p`
  font-size: 1.1vh;
  color: lightgray;
`;

export const InfoTitleContent = styled.p`
  font-size: 1.1vh;
  color: lightgray;
  position: relative;
`;
