import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import { homePageStyles } from '../homepage.styles';

export const LandingText = () => {
  return (
    <Box>
      <Typography variant="h1" sx={homePageStyles.fontHead}>
        James Web Space Telescope
      </Typography>
      <Typography>
        explore the universe
      </Typography>
    </Box>
  )
}