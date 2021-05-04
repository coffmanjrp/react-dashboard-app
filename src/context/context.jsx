import React, { createContext } from 'react';
import { useProvideUnsplash } from './useUnsplash';

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const unsplash = useProvideUnsplash();
  return <context.Provider value={unsplash}>{children}</context.Provider>;
};
