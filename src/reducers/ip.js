import {
    LOAD_DATA_REQUEST,
    LOAD_DATA_SUCCESS,
} from '../actions/actionsIP'

const INITIAL_STATE = {
    data: [],
    error: false,
    isFetching: false,
}

const ip = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_DATA_REQUEST:
            return {
                data: [],
                error: false,
                isFetching: true
            }
        case LOAD_DATA_SUCCESS:
            return {
                data: action.data,
                error: false,
                isFetching: false
            }
        case 'LOAD_DATA_FAILURE':
            return {
                data: action.data,
                error: true,
            }
        default:
            return state
    }
}

export default ip