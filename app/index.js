import React from 'react'
import { render } from 'react-dom'
import { createStore,compose } from 'redux'
import { Provider ,connect} from 'react-redux'
import APP from './components/index';
import todoReducer from './reducers/index.js'

let store = createStore(todoReducer, compose(window.devToolsExtension && window.devToolsExtension()));


render(
  <Provider store={store}>
	 <APP />
  </Provider>,
	document.getElementById("app")
)

