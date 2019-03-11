import React, { Component } from 'react';
import { Container } from 'react-bootstrap'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'

import Info from './components/Info'
import axios from 'axios'

import createSagaMiddleware from 'redux-saga'
const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleWare)
)

function *ola (){
  console.log('hello from saga')
  const dados = yield axios.get('http://httpbin.org/ip')
  console.log(dados.data)
}

sagaMiddleWare.run(ola)

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Container>
          <Info />
        </Container>
      </Provider>
    );
  }
}

export default App;
