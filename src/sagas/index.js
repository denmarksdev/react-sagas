import { takeLatest } from 'redux-saga/effects'
import { LOAD_DATA_REQUEST } from '../actions/actionsIP'
import { LOAD_UA_REQUEST } from '../actions/actionsUA'

import { getIP } from '../sagas/ipSagas'
import { getUA } from '../sagas/uaSagas'

export default function* index() {
    yield takeLatest(LOAD_DATA_REQUEST, getIP)
    yield takeLatest(LOAD_UA_REQUEST, getUA)
}