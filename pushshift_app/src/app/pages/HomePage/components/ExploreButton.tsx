import React from 'react';
import { Button } from '@mui/material';
import { homePageStyles } from '../homepage.styles';
import { useLayout } from 'app/components/AppLayout/useLayout';

export const ExploreButton = () => {

  const { sync } = useLayout();

  return (
    <Button 
      variant='contained' 
      sx={homePageStyles.button} 
      size="large"
      onClick={() => sync()}
    >
      Explore Topics 🚀🚀🚀
    </Button>
  )
}
