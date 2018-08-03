import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import Routes from './Routes'

import './index.css'
console.log(store.store)
render(
  <Provider store={store.store}>
  	
    <ConnectedRouter history={history}>
      <div>
        <Routes />
      </div>
    </ConnectedRouter>
    
  </Provider>,
  document.getElementById('root')
)