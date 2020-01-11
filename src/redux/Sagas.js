import { all } from 'redux-saga/effects';
import Home from '../routes/home/redux/sa-home';
export default function* rootSaga(getState) {
  yield all([
    Home()
  ]);
}