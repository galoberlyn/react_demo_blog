import React from 'react';
import { Box, Toolbar } from '@mui/material';

export const AppLayoutContainer = ({ appbar, drawer, content }) => {

  return (
    <Box sx={{ display: 'flex' }}>
      {appbar}
      <Box component="nav">
        {drawer}
      </Box>
      <Box component="main" sx={{ p:3 }}>
        <Toolbar />
        {content}
      </Box>
    </Box>
  )
}