import React, { Dispatch, FC, SetStateAction, createContext, useContext, useState } from "react";

type CounterContextType = [number, Dispatch<SetStateAction<number>>] | undefined;

const CounterContext = createContext<CounterContextType>(undefined);

interface CounterProviderProps {
  children: React.ReactNode;
}

export const CounterProvider: FC<CounterProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={[count, setCount]}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter(): CounterContextType {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
}
