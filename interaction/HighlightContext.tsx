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

type HighlightDataContextT = Datum[];
type SetHighlightDataContext = Dispatch<SetStateAction<HighlightDataContextT>>;

const HighlightDataContext = createContext<HighlightDataContextT>([]);
const HighlightDataApiContext = createContext<SetHighlightDataContext>(
  () => null
);

type HighlightCurrentDayContextT = Date | null;
type HighlightCurrentDayApiContextT = Dispatch<
  SetStateAction<HighlightCurrentDayContextT>
>;

const HighlightCurrentDayContext =
  createContext<HighlightCurrentDayContextT>(null);
const HighlightCurrentDayApiContext =
  createContext<HighlightCurrentDayApiContextT>(() => null);

export const HighlightContextProvider = ({ children }: PropsWithChildren) => {
  const [highlighData, setHighlightData] = useState<HighlightDataContextT>([]);
  const [highlightCurrentDay, setHighlighCurrentDay] =
    useState<HighlightCurrentDayContextT>(null);

  return (
    <HighlightDataContext.Provider value={highlighData}>
      <HighlightDataApiContext.Provider value={setHighlightData}>
        <HighlightCurrentDayContext.Provider value={highlightCurrentDay}>
          <HighlightCurrentDayApiContext.Provider value={setHighlighCurrentDay}>
            {children}
          </HighlightCurrentDayApiContext.Provider>
        </HighlightCurrentDayContext.Provider>
      </HighlightDataApiContext.Provider>
    </HighlightDataContext.Provider>
  );
};

export const useHighlightData = () => useContext(HighlightDataContext);
export const useHighlightDataApi = () => useContext(HighlightDataApiContext);
export const useHighlightCurrentDay = () =>
  useContext(HighlightCurrentDayContext);
export const useHighlightCurrentDayApi = () =>
  useContext(HighlightCurrentDayApiContext);
