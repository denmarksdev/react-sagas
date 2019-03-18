import sagaHelper from 'redux-saga-testing'
import { getIP } from '../sagas/ipSagas'
import { call, put } from 'redux-saga/effects'
import { loadDataSuccess } from '../actions/actionsIP';

describe('should test ipSagas', ()=> {
    const axiosMock = {
        get: jest.fn()
    }
    const it = sagaHelper( getIP( axiosMock))
    it ('should cll api get', result => {
        expect(result).toEqual(call(axiosMock.get, 'http://httpbin.org/ip'))
        return {
            data:{
                origin: 'ip retornado'
            }
        }
    } )

    it('should put loadDataSuccess', result => {
        expect(result).toEqual(put(loadDataSuccess('ip retornado')))
    })
})



