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

export const InfoTitleContainer = styled.div`
  position: relative;
  top: 7%;
`;

export const Title = styled.p`
  font-size: 3vh;
  font-weight: 600;
  margin: 0;
  font-family: sans-serif;
`;

export const InfoTitleContent = styled.p`
  font-size: 1.5vh;
  color: lightgray;
  position: relative;
`;

export const ItemContainer = styled.div`
  width: 90%;
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 700px;
`;

export const InfoText = styled.p`
  font-size: 1.5vh;
  font-family: sans-serif;
`;

export const ItemBtn = styled.button<{ clicked?: boolean }>`
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

export const SubmitBtn = styled.button`
  margin-bottom: 15px;
  cursor: pointer;
  width: 80%;
  height: 5%;
  max-height: 100px;
  color: white;
  background: #0075ff;
  border-radius: 5px;
  border: 0;
  position: relative;
  font-size: 1.5vh;
  max-width: 500px;
`;
export const CloseBtn = styled.button`
  cursor: pointer;
  width: 80%;
  height: 5%;
  max-height: 100px;
  color: white;
  background: gray;
  border-radius: 5px;
  border: 0;
  position: relative;
  font-size: 1.5vh;
  max-width: 500px;
`;
