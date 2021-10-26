import { createStore } from 'redux';
import counterReducer from '../reducers/counter';

const store = createStore(counterReducer, 0);

export default store;
