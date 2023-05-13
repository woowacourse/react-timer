import styled from 'styled-components';

type QuickTimerButtonProps = {
  text: string;
  onClick: () => void;
};

const QuickTimerButton = ({ text, onClick }: QuickTimerButtonProps) => {
  return <Button onClick={onClick}>{text}m</Button>;
};

const Button = styled.button`
  width: 88px;
  height: 88px;
  border: none;
  background-color: var(--green-200);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  color: #fff;
  font-size: 36px;
  line-height: 38px;
`;

export default QuickTimerButton;
