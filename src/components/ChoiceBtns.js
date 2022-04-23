import ChoiceButton from './ChoiceButton';
import { iconPaper, iconRock, iconScissors, bgTriangle } from '../images';
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
  width: 34rem;
  height: 30rem;
  place-items: center;
  grid-template-columns: 1fr 1fr;
  position: relative;
  @media screen and (max-width: 992px) {
    transform: scale(0.8);
  }
  &::before {
    position: absolute;
    content: '';
    inset: 0;
    background: url(${bgTriangle}) no-repeat;
    z-index: -2;
    background-position: center;
  }
`;
