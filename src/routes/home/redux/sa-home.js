import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import * as types from '../../../redux/ActionType';
import { GET, Header } from '../../../utils/Api'
import Config from '../../../utils/Config'

const getStateHome = (state) => state.Home

export function* getData() {
    try {
        const stateHome = yield select(getStateHome)
        const resData = yield call(GET, Config.BASE_URL + Config.LATEST + "?base=USD&symbols=" + stateHome.form.filter, Header)
        let mapRes = []
        Object.keys(resData.data.rates).map((x) => {
            let resultFil = stateHome.form.sourceFilter.filter(k => k.MataUang === x)
            if (resultFil.length !== 0) {
                mapRes.push({
                    label: x,
                    nominal: Number(resData.data.rates[[x]]).toFixed(2),
                    nama: stateHome.form.sourceFilter.find(y => y.MataUang === x).Nama
                })
            }
            return true
        })
        yield put({ type: types.HOME_GET_DATA_SUCCESS, value: mapRes })
    } catch (err) {

    }
}

export default function* rootSaga() {
    yield all([
        takeLatest(types.HOME_GET_DATA_REQUEST, getData)
    ])
}
