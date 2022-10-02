import React from 'react';
import { AppDrawer } from './AppDrawer';
import { useLayout } from './useLayout';
import { AppBarLayout } from './AppBarLayout';
import { AppLayoutContainer } from './AppLayoutContainer'; 

export const AppLayout = ({ children }) => {

  const { handleDrawerToggle, mobileOpen, handleHistory } = useLayout();

  return (
    <AppLayoutContainer
      content={children}
      drawer={
        <AppDrawer 
          handleDrawerToggle={handleDrawerToggle} 
          mobileOpen={mobileOpen}
          handleHistory={handleHistory}
        />
      }
      appbar={
        <AppBarLayout 
          handleDrawerToggle={handleDrawerToggle} 
          handleHistory={handleHistory}
        />
      }
    />
  )
}