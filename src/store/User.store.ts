import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from 'models';

import Cookies from 'js-cookie';

const user = createSlice({
  name: 'user',
  initialState: <IUser>{},
  reducers: {
    login(state: IUser, action: PayloadAction<IUser>) {
      const { email, password, remember} = action.payload;
      console.log('store');
      state.email = email;
      state.remember = remember;
      if(state.email === 'andersoncardoso.dev@gmail.com' && password === '98180596') {
        state.token = 'ef28e245f408a9667f765c8c61b8dcb5ae86bc2f';
        state.remember ? Cookies.set('atenda-token', 'ef28e245f408a9667f765c8c61b8dcb5ae86bc2f') : Cookies.set('atenda-token', '');
        document.location.href = '/dashboard';
      }
    },
    logout(state: IUser, action: PayloadAction<IUser>) {
      state.name = action.payload.name;
    },
    getToken(state: IUser) {
      state.token = Cookies.get('atenda-token') || '';
    }
  }
});

export const { login, logout } = user.actions;
export default user.reducer;
