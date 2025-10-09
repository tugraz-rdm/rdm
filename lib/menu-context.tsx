'use client';

import { FC, ReactNode, createContext, useContext, useState } from 'react';

interface MenuContextType {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true); // Menu open by default

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  return (
    <MenuContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
