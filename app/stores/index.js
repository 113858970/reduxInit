import { createStore, compose } from 'redux';
import todoReducer from '../reducers/index.js'


const todoStore = createStore(todoReducer, compose(window.devToolsExtension && window.devToolsExtension()));

export default todoStore;
