const INITIAL_STATE = {
    data: [],
    isFetiching: false,
    error: false
}

const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
const ip = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (action.type === LOAD_DATA_REQUEST):
            return {
                isFetching: true,
                data: [],
                error: false
            }
        default:
            return state
    }
}

export default ip

