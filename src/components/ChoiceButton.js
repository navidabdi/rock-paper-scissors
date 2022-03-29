import styled from 'styled-components';

import { iconPaper } from '../images';
const ChoiceButton = ({ icon, color, beforeColor }) => {
  return (
    <StyledChoiceBtn bgColor={color} beforeColor={beforeColor}>
      <img src={icon} alt="" />
    </StyledChoiceBtn>
  );
};
export default ChoiceButton;

const StyledChoiceBtn = styled.button`
  all: unset;
  position: relative;
  background-color: #fff;
  display: grid;
  place-items: center;
  border-radius: 50%;
  width: 9.5rem;
  height: 9.5rem;
  cursor: pointer;
  box-shadow: inset 0 0.5rem var(--shadow-light);

  &::before {
    content: '';
    position: absolute;
    background: var(${(props) => props.bgColor});
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 12.5rem;
    height: 12.5rem;
    z-index: -1;
    box-shadow: 0 0.5rem var(--shadow-medium),
      0 0.5rem ${(props) => props.beforeColor};
  }

  img {
    width: 4.25rem;
    transition: all 0.15s cubic-bezier(1, -0.16, 0.47, 1.23);
  }
  &:hover img {
    transform: scale(0.9);
  }
`;
