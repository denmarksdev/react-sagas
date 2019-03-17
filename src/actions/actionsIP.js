export const LOAD_DATA_REQUEST = 'LOAD_DATA_REQUEST';
export const loadDataRequest = () => {
    return {
        type: LOAD_DATA_REQUEST
    }
}

export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const loadDataSuccess = data => {
    return {
        type: LOAD_DATA_SUCCESS,
        data
    }
}