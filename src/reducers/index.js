import { combineReducers } from 'redux'
import ip from './ip'
import ua from './ua'

const reducers = combineReducers({ ip, ua })

export default reducers