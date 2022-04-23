import styled from 'styled-components';
const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <p>ROCK</p> <p>PAPER</p> <p>SCISSORS</p>
      </h1>
      <div className="score">
        <p className="text">SCORE</p>
        <p className="number">12</p>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  border: 4px solid #ffffff48;
  padding: 1.5rem;
  border-radius: 0.6rem;
  width: 50%;
  @media screen and (max-width: 992px) {
    width: 90%;
    padding: 1rem;
    margin-bottom: 0;
  }
  h1 {
    font-weight: 600;
    line-height: 0.8;
  }
  .score {
    background-color: #fff;
    color: var(--Dark-Text);
    border-radius: 0.4rem;
    padding: 0.6rem 2.5rem;
    text-align: center;
    .text {
    }
    .number {
      font-size: 3.5rem;
      font-weight: 900;
    }
  }
`;
