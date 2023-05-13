import * as Styled from './TriggerButtonSection.styled';
import Button from '../Button/Button';

interface TriggerButtonSectionProps {
  onReset: () => void;
  onRunning: () => void;
  onLap?: () => void;
  isRunning: boolean;
  isStopwatch?: boolean;
}

const TriggerButtonSection = ({
  onReset,
  onRunning,
  onLap,
  isRunning,
  isStopwatch = false,
}: TriggerButtonSectionProps) => {
  return (
    <Styled.TriggerButtonSection>
      {/* TODO: Add disable button */}
      {isStopwatch && isRunning ? (
        <Button onClick={onLap}>랩</Button>
      ) : (
        <Button onClick={onReset}>재설정</Button>
      )}
      <Button onClick={onRunning}>{isRunning ? '정지' : '시작'}</Button>
    </Styled.TriggerButtonSection>
  );
};
export default TriggerButtonSection;
