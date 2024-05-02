import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import palette, { PalletteKeyTypes } from 'Components/styles/palette';

interface ButtonStyle {
  width?: string;
  height?: string;
  border?: string;
  padding?: string;
  margin?: string;
  buttonColor?: PalletteKeyTypes;
  fontColor?: PalletteKeyTypes;
  fontSize?: string;
  borderRadius?: string;
  maxWidth?: string;
  maxHeight?: string;
  boxShadow?: string;
}

interface ButtonProps
  extends ButtonStyle,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  clicked?: boolean;
}

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
    <ButtonStyled className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonProps>`
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  margin: ${(props) => (props.margin ? props.margin : '1px')};
  padding: ${(props) => (props.padding ? props.padding : '1px')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '500px')};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '100px')};

  color: ${(props) => (props.fontColor ? props.fontColor : palette.white)};
  background: ${(props) =>
    props.buttonColor ? palette[props.buttonColor] : palette.blue};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.5vh')};
  border: ${(props) => (props.border ? props.border : '0')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '5px'};

  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : null)};
  ${({ clicked }) =>
    clicked &&
    css`
      background: #0075ff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: white;
    `}
`;

export default Button;
