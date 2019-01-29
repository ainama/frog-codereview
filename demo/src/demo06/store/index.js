import { createStore } from 'redux';
import { todo } from '../reducers/index.js';
const store = createStore(todo);
export default store;
