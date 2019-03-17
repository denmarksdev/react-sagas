import axios from 'axios'
import { loadDataUASuccess } from '../actions/actionsUA'
import { put } from 'redux-saga/effects'

export function* getUA() {
    const dados = yield axios.get('http://httpbin.org/user-agent')
    yield put(loadDataUASuccess(dados.data['user-agent'] ))
}
