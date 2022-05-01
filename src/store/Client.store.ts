import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IClientForm } from 'models';

const client = createSlice({
  name: 'client',
  initialState: <IClientForm> {
    cpf: '',
    name: '',
    phone: '',
    email: '',
    address: {
      street: '',
      number: 0,
      city: '',
      district: '',
      state: '',
      cep: '',
    }
  },
  reducers: {
    create(state, action: PayloadAction<IClientForm>) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.cpf = action.payload.cpf;
      state.address = action.payload.address;
    },
    update(state, action: PayloadAction<IClientForm>) {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.cpf = action.payload.cpf;
      state.address = action.payload.address;
    },
    getById(state, action: PayloadAction<number>) {
      console.log('getById '+ action.payload);
    },
    getAll() {
      console.log('getAll');
    },
  }
});

export const { create, update } = client.actions;
export default client.reducer;