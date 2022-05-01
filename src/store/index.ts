import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import ClientReducer from './Client.store';
import TechnicianReducer from './Technician.store';
import SidebarReducer from './Sidebar.store';

const store = configureStore({
  reducer: {
    client: ClientReducer,
    technician: TechnicianReducer,
    sidebar: SidebarReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;