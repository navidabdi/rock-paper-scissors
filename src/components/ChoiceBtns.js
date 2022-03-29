import ChoiceButton from './ChoiceButton';
import { iconPaper, iconRock, iconScissors } from '../images';
import styled from 'styled-components';

const choiceBgColor = [
  '--Paper-Gradient',
  '--Rock-Gradient',
  '--Scissors-Gradient',
];
const choiceBeforeColor = [
  'hsl(39, 89%, 49%)',
  'hsl(230, 89%, 62%)',
  'hsl(349, 71%, 52%)',
];
const ChoiceBtns = () => {
  return (
    <StyledChoiceBtns>
      <ChoiceButton
        icon={iconPaper}
        color={choiceBgColor[0]}
        beforeColor={choiceBeforeColor[1]}
      />
      <ChoiceButton
        icon={iconRock}
        color={choiceBgColor[1]}
        beforeColor={choiceBeforeColor[2]}
      />
      <ChoiceButton
        icon={iconScissors}
        color={choiceBgColor[2]}
        beforeColor={choiceBeforeColor[0]}
      />
    </StyledChoiceBtns>
  );
};

export default ChoiceBtns;

const StyledChoiceBtns = styled.div`
  display: grid;
  width: 30rem;
  height: 30rem;
  /* gap: 2rem; */
  place-items: center;
  grid-template-columns: 1fr 1fr;
`;
