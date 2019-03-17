import React, { Component } from 'react';
import { Container } from 'react-bootstrap'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import Info from './components/Info'
import UserAgent from './components/UserAgent'

import createSagaMiddleware from 'redux-saga'
import index from './sagas/index'

const sagaMiddleWare = createSagaMiddleware()
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleWare)
)

sagaMiddleWare.run(index)

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Container>
          <Info />
          <UserAgent/>
        </Container>
      </Provider>
    );
  }
}

export default App;
