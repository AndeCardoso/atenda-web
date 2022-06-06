import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITechnicianForm } from 'models';

const technician = createSlice({
  name: 'technician',
  initialState: <ITechnicianForm>{},
  reducers: {
    create(state: ITechnicianForm, action: PayloadAction<ITechnicianForm>) {
      state.code = action.payload.code;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.cpf = action.payload.cpf;
      state.address = action.payload.address;
      state.duty = action.payload.duty;
      state.externService = action.payload.externService;
    },
    update(state: ITechnicianForm, action: PayloadAction<ITechnicianForm>) {
      state.code = action.payload.code;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.cpf = action.payload.cpf;
      state.address = action.payload.address;
      state.duty = action.payload.duty;
      state.externService = action.payload.externService;
    },
    getById(state: any, action: PayloadAction<number>) {
      console.log('getById '+ action.payload);
    },
    getAll() {
      console.log('getAll');
    }
  }
});

export const { create, update } = technician.actions;
export default technician.reducer;