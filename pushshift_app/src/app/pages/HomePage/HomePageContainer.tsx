import React from 'react';
import { Grid } from '@mui/material';
import { homePageStyles } from './homepage.styles';
import { useLayout } from 'app/components/AppLayout/useLayout';
import { Loading } from 'app/components/Loading/Loading';

type HomePageContainerTypes = {
  landingText: React.ReactNode;
  exploreCta: React.ReactNode;
}

const HomePageContainer : React.FC<HomePageContainerTypes> = ({ landingText, exploreCta }) => {

  const { loading } = useLayout();

  return (
    <>
      <Loading active={loading} />
      <Grid container sx={homePageStyles.root}>
        <Grid item xs={12}>
          { landingText }
        </Grid>
        <Grid item xs={12}>
          { exploreCta }
        </Grid>
      </Grid>
    </>
  )
}

export default HomePageContainer;