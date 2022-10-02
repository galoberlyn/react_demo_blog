import { call, put, takeLatest } from 'redux-saga/effects';
import { homepageActions as actions } from '.';
import { syncData } from './api';

function* syncSaga() {
  try {
    console.log( 'hweas')
    const data = yield call(syncData);
    yield put(actions.syncSuccess());
    window.location.href = '/blog';
  } catch (e) {
    console.log(e);
    yield put(actions.syncFailed('Failed to sync, are you connected?'));
  }
}

export function* homepageSaga() {
  yield takeLatest(actions.sync.type, syncSaga);
}
