import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { homepageSaga } from './saga';
import { HomepageState } from './types';

export const initialState: HomepageState = {
  loading: false,
  error: '',
};

const slice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    sync(state) {
      state.loading = true;
    },
    syncFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    syncSuccess(state) {
      state.loading = true;
    }
  },
});

export const { actions: homepageActions } = slice;

export const useHomepageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: homepageSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useHomepageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
