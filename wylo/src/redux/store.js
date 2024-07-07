// redux/store.js
import { createStore } from 'redux';
import rootReducer from './reducer'; // Import your combined reducers

const store = createStore(rootReducer); // Create your Redux store

export default store;
