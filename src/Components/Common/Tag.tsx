/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const ItemBtn = styled.button<{ clicked?: boolean }>`
  height: 33px;
  border-radius: 10px;
  border: 0;
  padding: 0 15px;
  margin: 10px;

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
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 570px;
  max-width: 500px;
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
`;

export const MarginTag = styled.div<{margin?:number | null}>`
margin: ${(props) => (props.margin !== null ? `${props.margin}px` : '0px')}
`