import { call, put, takeLatest } from 'redux-saga/effects';
import { blogActions as actions } from '.';
import { getBlogs } from './api';

function* fetchBlogsSaga() {
  try {
    const data = yield call(getBlogs);
    yield put(actions.fetchBlogsSuccess(data));
  } catch (e) {
    yield put(actions.fetchBlogsFailed('Failed to fetch blog data'));
  }
}

export function* blogSaga() {
  yield takeLatest(actions.fetchBlogs.type, fetchBlogsSaga);
}
