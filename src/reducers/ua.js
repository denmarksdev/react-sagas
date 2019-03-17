import { 
    LOAD_UA_REQUEST,
    LOAD_UA_SUCCESS 
} from '../actions/actionsUA'

const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false,
}

const ua = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case  LOAD_UA_REQUEST:
            return {
                isFetching: true,
                data: [],
                error: false
            }
        case LOAD_UA_SUCCESS:
            return {
                isFetching: false,
                data: action.data,
                error: false
            }
        default:
            return state
    }
}

export default ua