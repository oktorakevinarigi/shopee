import * as types from '../../../redux/ActionType'

const initState = {
    dataSource: [],
    form: {
        nominal: 10,
        filter: ['IDR','CAD'],
        sourceFilter: [
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
    }
};

export default function (state = initState, action) {
    switch (action.type) {
        case types.HOME_GET_DATA_SUCCESS:
            return {
                ...state,
                dataSource: action.value
            };
        case types.HOME_HANDLE_STATE:
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.property]: action.value
                }
            };
        default:
    }
    return state;
}