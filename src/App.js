import './App.css';
import ChoiceBtns from './components/ChoiceBtns';
import styled from 'styled-components';

function App() {
  return (
    <StyledApp>
      <ChoiceBtns />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
