import './App.css';
import { ChoiceBtns, Header, ResultBtn } from './components';
import styled from 'styled-components';
import { useStateContext } from './contexts/DataStates';

function App() {
  const { first, setfirst } = useStateContext();
  return (
    <StyledApp>
      <Header />
      <ChoiceBtns />
      <ResultBtn />
      {console.log(first)}
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
