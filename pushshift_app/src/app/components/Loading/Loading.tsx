import { Box } from '@mui/system';
import React from 'react';
import './loading.css';

export const Loading = ({ active }) => {

  if (active) {

    return (
      <Box className="loading" />
    )
  }

  return null;
}