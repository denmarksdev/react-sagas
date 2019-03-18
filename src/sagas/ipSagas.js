
import { loadDataSuccess } from '../actions/actionsIP'
import { put, call } from 'redux-saga/effects'

export function *getIP(axios) {
    const dados = yield call(axios.get , 'http://httpbin.org/ip')
    yield put(loadDataSuccess(dados.data.origin))
  }