import React, { Children, ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import palette, { PalletteKeyTypes } from 'Components/styles/palette';

interface ButtonStyle {
  width?: string;
  height?: string;
  border?: string;
  buttonColor?: PalletteKeyTypes;
  fontColor?: PalletteKeyTypes;
  fontSize?: string;
  borderRadius?: string;
  maxWidth?: string;
  maxHeight?: string;
}

interface ButtonProps
  extends ButtonStyle,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function Button({ className, children, ...rest }: ButtonProps): ReactElement {
  return (
    <ButtonStyled className={className} {...rest}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button<ButtonStyle>`
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : '500px')};
  height: ${(props) => (props.height ? props.height : '5%')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '500px')};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '100px')};

  color: ${(props) => (props.fontColor ? props.fontColor : palette.white)};
  background: ${(props) =>
    props.buttonColor ? palette[props.buttonColor] : palette.blue};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.5vh')};
  border: ${(props) => (props.border ? props.border : '0')};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : '5px'};
`;

export default Button;
