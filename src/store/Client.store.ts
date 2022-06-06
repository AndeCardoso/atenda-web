import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IClientForm } from 'models';

const client = createSlice({
  name: 'client',
  initialState: <IClientForm> {},
  reducers: {
    create(state: IClientForm, action: PayloadAction<IClientForm>) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.cpf = action.payload.cpf;
      state.address = action.payload.address;
    },
    update(state: IClientForm, action: PayloadAction<IClientForm>) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.cpf = action.payload.cpf;
      state.address = action.payload.address;
    },
    getById(state: IClientForm, action: PayloadAction<number>) {
      console.log('getById '+ action.payload);
    },
    getAll(state: IClientForm) {
      console.log(state);
    },
  }
});

export const { create, update } = client.actions;
export default client.reducer;