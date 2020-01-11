import * as types from '../../../redux/ActionType'

const initState = {
    dataSource: [],
    form: {
        nama: 'nama'
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
                    [action.payload]: action.value
                }
            };
        default:
    }
    return state;
}