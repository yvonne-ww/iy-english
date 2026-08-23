import React, { createContext, useState, useContext, useEffect } from 'react';
import { User, Word, WordProgress, PracticeRecord } from '../types';

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  words: Word[];
  setWords: (words: Word[]) => void;
  progress: WordProgress[];
  setProgress: (progress: WordProgress[]) => void;
  practices: PracticeRecord[];
  setPractices: (practices: PracticeRecord[]) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [words, setWords] = useState<Word[]>([]);
  const [progress, setProgress] = useState<WordProgress[]>([]);
  const [practices, setPractices] = useState<PracticeRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        words,
        setWords,
        progress,
        setProgress,
        practices,
        setPractices,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};
