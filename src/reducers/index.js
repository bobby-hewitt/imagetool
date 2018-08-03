import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import search from './search'
import composition from './composition'
import canvas from './canvas'
import ui from './ui'


export default combineReducers({
  routing: routerReducer,
  counter,
  search,
  composition,
  canvas,
  ui
}) 