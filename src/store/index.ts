import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import UserReducer from './User.store';
import ServiceOrderReducer from './ServiceOrder.store';
import ClientReducer from './Client.store';
import TechnicianReducer from './Technician.store';
import DeviceReducer from './Device.store';
import SidebarReducer from './Sidebar.store';

const store = configureStore({
  reducer: {
    user: UserReducer,
    client: ClientReducer,
    serviceOrder: ServiceOrderReducer,
    technician: TechnicianReducer,
    device: DeviceReducer,
    sidebar: SidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
