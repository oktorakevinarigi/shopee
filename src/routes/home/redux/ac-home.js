import * as types from '../../../redux/ActionType'

export const getData = () => {
    return ({
        type: types.HOME_GET_DATA_REQUEST
    })
}

export const handleState = (property, value) => {
    return ({
        type: types.HOME_HANDLE_STATE,
        property,
        value
    })
}
