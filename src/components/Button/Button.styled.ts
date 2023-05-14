import styled from 'styled-components';
import { ButtonProps } from './Button';

const buttonWidth = {
  small: '105px',
  medium: '260px',
  large: '300px',
} as const satisfies Record<NonNullable<ButtonProps['size']>, string>;

export const Button = styled.button<Partial<ButtonProps>>`
  width: ${(props) => props.size && buttonWidth[props.size]};
  height: 50px;
  background: rgba(199, 191, 191, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #292929;
  cursor: pointer;
`;
