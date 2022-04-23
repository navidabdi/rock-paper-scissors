import { createContext, useContext, useState } from 'react';

const StateContext = createContext();
export const DataStates = ({ children }) => {
  const [first, setfirst] = useState('test');

  return (
    <StateContext.Provider value={{ first, setfirst }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
