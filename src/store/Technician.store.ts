import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Duty, ITechnicianForm } from 'models';

const technician = createSlice({
  name: 'technician',
  initialState: <ITechnicianForm>{
    code: 0,
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
    },
    duty: <Duty>['desktop', 'notebook', 'celular', 'tablet'],
    externService: false
  },
  reducers: {
    create(state, action: PayloadAction<ITechnicianForm>) {
      state.code = action.payload.code;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.cpf = action.payload.cpf;
      state.address = action.payload.address;
      state.duty = action.payload.duty;
      state.externService = action.payload.externService;
    },
    update(state, action: PayloadAction<ITechnicianForm>) {
      state.code = action.payload.code;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.cpf = action.payload.cpf;
      state.address = action.payload.address;
      state.duty = action.payload.duty;
      state.externService = action.payload.externService;
    },
    getById(state, action: PayloadAction<number>) {
      console.log('getById '+ action.payload);
    },
    getAll() {
      console.log('getAll');
    }
  }
});

export const { create, update } = technician.actions;
export default technician.reducer;