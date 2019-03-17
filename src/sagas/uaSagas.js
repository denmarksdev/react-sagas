import { loadDataUASuccess } from '../actions/actionsUA'
import { put } from 'redux-saga/effects'

export function *getUA(axios) {
    const dados = yield axios.get('http://httpbin.org/user-agent')
    yield put(loadDataUASuccess(dados.data['user-agent'] ))
}
