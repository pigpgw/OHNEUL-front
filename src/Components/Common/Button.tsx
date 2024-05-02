import React, { ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import palette, { PalletteKeyTypes } from 'Components/styles/palette';

interface ButtonStyle {
  width?: string;
  height?: string;
  border?: string;
  padding?: string;
  margin?: string;
  buttoncolor?: PalletteKeyTypes;
  fontcolor?: PalletteKeyTypes;
  fontSize?: string;
  borderradius?: string;
  maxwidth?: string;
  maxheight?: string;
  boxshadow?: string;
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
  max-width: ${(props) => (props.maxwidth ? props.maxwidth : '500px')};
  max-height: ${(props) => (props.maxheight ? props.maxheight : '100px')};

  color: ${(props) => (props.fontcolor ? props.fontcolor : palette.white)};
  background: ${(props) =>
    props.buttoncolor ? palette[props.buttoncolor] : palette.blue};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.5vh')};
  border: ${(props) => (props.border ? props.border : '0')};
  border-radius: ${(props) =>
    props.borderradius ? props.borderradius : '5px'};

  box-shadow: ${(props) => (props.boxshadow ? props.boxshadow : null)};
  ${({ clicked }) =>
    clicked &&
    css`
      background: #0075ff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: white;
    `}
`;

export default Button;
