import axios from 'axios'
import { loadDataSuccess } from '../actions/actionsIP'
import { put } from 'redux-saga/effects'

export function* getIP() {
    const dados = yield axios.get('http://httpbin.org/ip')
    yield put(loadDataSuccess(dados.data.origin))
  }