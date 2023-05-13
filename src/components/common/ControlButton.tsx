import styled from 'styled-components';

type ControlButtonProps = {
  text: string;
  onClick: () => void;
};

const ControlButton = ({ text, onClick }: ControlButtonProps) => {
  return <Button onClick={onClick}>{text}</Button>;
};

const Button = styled.button`
  width: 128px;
  height: 58px;
  border: none;
  background-color: var(--green-100);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  color: #525252;
  font-size: 24px;
  line-height: 38px;
`;

export default ControlButton;
