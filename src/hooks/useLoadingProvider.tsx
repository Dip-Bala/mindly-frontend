// LoadingProvider.tsx
import { createContext, useState, useContext, type ReactNode } from 'react';
import { Loader } from '../components/ui/Loading';

type LoadingContextType = {
  show: () => void;
  hide: () => void;
};

export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) throw new Error('useLoading must be inside LoadingProvider');
  return context;
};

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return (
    <LoadingContext.Provider value={{ show, hide }}>
      {children}
      {isVisible && <Loader />}
    </LoadingContext.Provider>
  );
};
