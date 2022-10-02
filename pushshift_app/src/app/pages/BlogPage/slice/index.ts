import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { blogSaga } from './saga';
import { BlogData, BlogState } from './types';

export const initialState: BlogState = {
  loading: false,
  blogs: [],
  error: '',
};

const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    fetchBlogs(state) {
      state.loading = true;
    },
    fetchBlogsSuccess(state, action: PayloadAction<BlogData[]>) {
      state.blogs = action.payload;
      state.loading = false;
      state.error = '';
    },
    fetchBlogsFailed(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions: blogActions } = slice;

export const useBlogSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: blogSaga });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useBlogSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
