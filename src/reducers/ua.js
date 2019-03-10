const INITIAL_STATE = {
    data: [],
    isFetiching: false,
    error: false
}

const LOAD_UA_REQUEST = 'LOAD_UA_REQUEST';
const ua = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (action.type === LOAD_UA_REQUEST):
            return {
                isFetching: true,
                data: [],
                error: false
            }
        default:
            return state
    }
}

export default  ua