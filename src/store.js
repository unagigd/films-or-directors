import { createStore } from 'redux';
import mainReducer from './reducers';

let store = (initialState) => createStore(mainReducer, initialState);

export default store;
