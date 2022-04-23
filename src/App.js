import './App.css';
import { ChoiceBtns, Header } from './components';
import styled from 'styled-components';

function App() {
  return (
    <StyledApp>
      <Header />
      <ChoiceBtns />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
