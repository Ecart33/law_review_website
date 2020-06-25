import { createStore } from 'redux';
import { RootReducer } from './Reducers/Root';

export const Store = createStore(RootReducer);
