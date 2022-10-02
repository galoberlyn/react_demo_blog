import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => {
  if (state && state.homepage) {
    
    return state.homepage;
  }

  return initialState;
}

export const selectHomepage = createSelector([selectSlice], state => state);
