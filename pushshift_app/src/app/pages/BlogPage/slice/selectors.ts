import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => {
  if (state && state.blog) {
    return state.blog;
  }

  return initialState;
};

export const selectBlog = createSelector([selectSlice], state => state);
