import styled from 'styled-components';
const ChoiceButton = ({ icon, color, beforeColor }) => {
  return (
    <StyledChoiceBtnWrapper bgColor={color} beforeColor={beforeColor}>
      <StyledChoiceBtn className={`choiceBtn ${icon}`}>
        <img src={icon} alt="" />
      </StyledChoiceBtn>
    </StyledChoiceBtnWrapper>
  );
};
export default ChoiceButton;

const StyledChoiceBtnWrapper = styled.div`
  cursor: pointer;
  width: 12.5rem;
  height: 12.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:last-child {
    grid-column: span 2;
    place-self: center;
  }
  .choiceBtn {
    position: relative;
    background-color: #fff;
    display: grid;
    place-items: center;
    border-radius: 50%;
    width: 9.5rem;
    height: 9.5rem;
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
  }
  img {
    width: 4.25rem;
    transition: all 0.15s cubic-bezier(1, -0.16, 0.47, 1.23);
  }
  &:hover img {
    transform: scale(0.9);
  }
`;

const StyledChoiceBtn = styled.div``;
