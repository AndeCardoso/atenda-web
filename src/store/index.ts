import { configureStore, combineReducers } from '@reduxjs/toolkit';
import clientReducer from './Client/Client.reducer';

const rootReducer: any = combineReducers({
  client: clientReducer
});

export const store = configureStore(rootReducer);