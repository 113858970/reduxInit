import { createStore, compose } from 'redux';
import todoReducer from '../reducers/index.js'

//测试
const todoStore = createStore(todoReducer, compose(window.devToolsExtension && window.devToolsExtension()));
export default todoStore;
