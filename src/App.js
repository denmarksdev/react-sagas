import React, { Component } from 'react';
import { Container } from 'react-bootstrap'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Container>
          <h1>Imagens</h1>
        </Container>
      </Provider>
    );
  }
}

export default App;
