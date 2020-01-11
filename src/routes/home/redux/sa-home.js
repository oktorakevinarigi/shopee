import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import * as types from '../../../redux/ActionType';
import { GET, Header } from '../../../utils/Api'
import Config from '../../../utils/Config'

const getStateHome = (state) => state.Home

export function* getData() {
    try {
        const stateHome = yield select(getStateHome)
        const resData = yield call(GET, Config.BASE_URL + Config.LATEST, Header)
        yield put({ type: types.HOME_GET_DATA_SUCCESS, value: resData.data })
    } catch (err) {
        
    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(types.HOME_GET_DATA_REQUEST, getData)
    ])
}
