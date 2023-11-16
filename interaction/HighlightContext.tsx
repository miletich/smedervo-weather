'use client';

import { Datum } from '@/utils/data';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type HighlightDataContextT = number[];
type SetHighlightDataContext = Dispatch<SetStateAction<HighlightDataContextT>>;

const HighlightDataContext = createContext<HighlightDataContextT>([]);
const HighlightDataApiContext = createContext<SetHighlightDataContext>(
  () => null
);

export const HighlightContextProvider = ({ children }: PropsWithChildren) => {
  const [highlighData, setHighlightData] = useState<HighlightDataContextT>([]);

  return (
    <HighlightDataContext.Provider value={highlighData}>
      <HighlightDataApiContext.Provider value={setHighlightData}>
        {children}
      </HighlightDataApiContext.Provider>
    </HighlightDataContext.Provider>
  );
};

export const useHighlightData = () => useContext(HighlightDataContext);
export const useHighlightDataApi = () => useContext(HighlightDataApiContext);
