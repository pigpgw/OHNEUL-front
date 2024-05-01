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

interface TitleProps {
  fontSize?: string;
  fontColor?: string;
  fonstWeight?: string;

  display?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  textAlign?: string;
}

export const Title = styled.h1<TitleProps>`
  display: ${(props) => (props.display ? props.display : null)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '3.5vh')};
  font-weight: ${(props) => (props.fonstWeight ? props.fonstWeight : '700')};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : 'sans-serif'};
  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
`;

interface ContentProps {
  fontSize?: string;
  fontColor?: string;
  fonstWeight?: string;
  textAlign?: string;

  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
}

export const Content = styled.div<ContentProps>`
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  margin: ${(props) => (props.margin ? props.margin : '0')};

  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
  font-weight: ${(props) => (props.fonstWeight ? props.fonstWeight : '0')};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : 'sans-serif'};
  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
`;

interface WrapperProps {
  width?: string;
  maxWidth?: string;
  height?: string;
  minHeight? : string;
  maxHegith?: string;
  margin?: string;
  border?: string;
  padding?: string;
  backgroundColor?: string;

  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  overflowY?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  width: ${(props) => (props.width ? props.width : null)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : null)};
  height: ${(props) => (props.height ? props.height : null)};
  min-height:${(props) => (props.minHeight ? props.minHeight : null)};
  max-height: ${(props) => (props.maxHegith ? props.maxHegith : null)};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : null};

  display: ${(props) => (props.display ? props.display : null)};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : null};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props) => (props.alignItems ? props.alignItems : null)};
  overflow-y: ${(props) => (props.overflowY ? props.overflowY : null)};
  border: ${(props) => (props.border ? props.border : null)};
  box-sizing: border-box;
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
