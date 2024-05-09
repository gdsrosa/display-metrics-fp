import { Dispatch, createContext, useReducer } from 'react';
import { chartsLabelReducer } from './reducer';
import { Action, State } from '@/types/Context';

type ChartsProviderProps = {
  children: React.ReactNode;
};

export const ChartLabelContext = createContext<State>({
  label: '',
});

export const ChartLabelDispatchContext = createContext<Dispatch<Action>>(
  () => {},
);

export function ChartsProvider({ children }: ChartsProviderProps) {
  const initialState = { label: '' };
  const [chartsLabel, dispatch] = useReducer(chartsLabelReducer, initialState);

  return (
    <ChartLabelContext.Provider value={chartsLabel}>
      <ChartLabelDispatchContext.Provider value={dispatch}>
        {children}
      </ChartLabelDispatchContext.Provider>
    </ChartLabelContext.Provider>
  );
}
