import { createStore } from 'redux';
import myReducer from './reducers/index';

const Store = createStore(myReducer);

export default Store;