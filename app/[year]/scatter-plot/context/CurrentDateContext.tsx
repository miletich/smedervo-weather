'use client';

import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { VoronoiCellProps } from '../controllers/TooltipController/utilsServer';

type CurrentDateContextT = Omit<VoronoiCellProps, 'd'> | null;
type SetCurrentDateData = Dispatch<SetStateAction<CurrentDateContextT>>;

const DataContext = createContext<CurrentDateContextT>(null);
const ApiContext = createContext<SetCurrentDateData>(() => null);

export const CurrentDateContextProvider = ({ children }: PropsWithChildren) => {
  const [currentDate, setCurrentDate] = useState<CurrentDateContextT>(null);

  return (
    <DataContext.Provider value={currentDate}>
      <ApiContext.Provider value={setCurrentDate}>
        {children}
      </ApiContext.Provider>
    </DataContext.Provider>
  );
};

export const useCurrentDateData = () => useContext(DataContext);
export const useCurrentDateApi = () => useContext(ApiContext);
