import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExploreButton } from './components/ExploreButton';
import { LandingText } from './components/LandingText';
import HomePageContainer from './HomePageContainer';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      <HomePageContainer
        landingText={<LandingText />}
        exploreCta={<ExploreButton />}
      />
    </>
  );
}
