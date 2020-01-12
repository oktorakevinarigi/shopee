import * as types from '../../../redux/ActionType'

const initState = {
    dataSource: [],
    form: {
        nominal: 10,
        filter: 'CAD'
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