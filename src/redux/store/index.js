import { createStore } from 'redux';
import counterReducer from '../reducers/counterReducer';

const store = createStore(counterReducer, 0);

export default store;
