import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as Styled from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
}

const Button = ({
  size = 'small',
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Styled.Button type="button" onClick={onClick} size={size}>
      {children}
    </Styled.Button>
  );
};

export default Button;
