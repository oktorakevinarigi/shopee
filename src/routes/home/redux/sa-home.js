import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import * as types from '../../../redux/ActionType';
import { GET, Header } from '../../../utils/Api'
import Config from '../../../utils/Config'

const getStateHome = (state) => state.Home

export function* getData() {
    try {
        const stateHome = yield select(getStateHome)
        let namaMataUang = [
            {
                MataUang: 'CAD',
                Nama: 'Canadian Dollar'
            },
            {
                MataUang: 'IDR',
                Nama: 'Indonesia Rupiah'
            },
            {
                MataUang: 'GBP',
                Nama: 'British Pound Sterling'
            },
            {
                MataUang: 'CHF',
                Nama: 'Swiss Franc'
            },
            {
                MataUang: 'SGD',
                Nama: 'Singapore Dollar'
            },
            {
                MataUang: 'INR',
                Nama: 'India Rupee'
            },
            {
                MataUang: 'MYR',
                Nama: 'Malaysian Ringgit'
            },
            {
                MataUang: 'JPY',
                Nama: 'Japanese Yen'
            },
            {
                MataUang: 'KRW',
                Nama: 'South Korean Won'
            }
        ]
        const resData = yield call(GET, Config.BASE_URL + Config.LATEST + "?base=USD&symbols=" + stateHome.form.filter, Header)
        let mapRes = []
        Object.keys(resData.data.rates).map((x, i) => {
            let resultFil = namaMataUang.filter(k => k.MataUang == x)
            if (resultFil.length != 0) {
                mapRes.push({
                    label: x,
                    nominal: Number(resData.data.rates[[x]]).toFixed(2),
                    nama: namaMataUang.find(y => y.MataUang == x).Nama
                })
            }
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
