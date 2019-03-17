export const LOAD_UA_REQUEST = 'LOAD_UA_REQUEST';
export const loadDataUARequest = () => {
    return {
        type: LOAD_UA_REQUEST
    }
}

export const LOAD_UA_SUCCESS = 'LOAD_UA_SUCCESS';
export const loadDataUASuccess = data => {
    return {
        type: LOAD_UA_SUCCESS,
        data
    }
}