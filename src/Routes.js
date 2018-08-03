import React from 'react';
import { Route, Link } from 'react-router-dom'
import Search from './containers/Search'
import Compose from './containers/Compose'

import styles from './App.css'

const Routes = () => (
  <div >
    <header>
      <Link style={{paddingRight: '10px'}}to="/">Search</Link>
      <Link style={{paddingRight: '10px'}}to="/compose">Compose</Link>
    </header>

    <main>
      <div className="container">
      <Route exact path="/" component={Search} />
      <Route exact path="/compose" component={Compose} />
      </div>
    </main>
  </div>
)

export default Routes;
