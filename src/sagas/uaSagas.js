import { loadDataUASuccess } from '../actions/actionsUA'
import { put, call } from 'redux-saga/effects'

export function *getUA(axios) {
    const dados = yield  call( axios.get , 'http://httpbin.org/user-agent')
    yield put(loadDataUASuccess(dados.data['user-agent'] ))
}
