'use client';

import { VoronoiCellProps } from '@/utils/lib';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

type CurrentDateContextT = Omit<VoronoiCellProps, 'd'> | null;
type SetCurrentDateData = Dispatch<SetStateAction<CurrentDateContextT>>;

const DataContext = createContext<CurrentDateContextT>(null);
const ApiContext = createContext<SetCurrentDateData>(() => null);

export const CurrentDateContextProvider = ({ children }: PropsWithChildren) => {
  const [currentDate, setCurrentDate] = useState<CurrentDateContextT>(null);

  const handleSetCurrentDate: SetCurrentDateData = useCallback(
    (d) => setCurrentDate(d),
    [setCurrentDate]
  );

  return (
    <DataContext.Provider value={currentDate}>
      <ApiContext.Provider value={handleSetCurrentDate}>
        {children}
      </ApiContext.Provider>
    </DataContext.Provider>
  );
};

export const useCurrentDateData = () => useContext(DataContext);
export const useCurrentDateApi = () => useContext(ApiContext);
