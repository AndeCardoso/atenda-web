import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IClient } from 'models';

const client = createSlice({
  name: 'client',
  initialState: <IClient[]>[{}],
  reducers: {
    create(state: IClient[], action: PayloadAction<IClient>) {
      state.push(action.payload);
      console.log(state);
      // state.name = action.payload.name;
      // state.phone = action.payload.phone;
      // state.email = action.payload.email;
      // state.cpf = action.payload.cpf;
      // state.address = action.payload.address;
    },
    update(state: IClient[], action: PayloadAction<IClient>) {
      //state = { ...action.payload };
      // state.name = action.payload.name;
      // state.phone = action.payload.phone;
      // state.email = action.payload.email;
      // state.cpf = action.payload.cpf;
      // state.address = action.payload.address;
    },
    getById(state: IClient[], action: PayloadAction<number>) {
      console.log('getById ' + action.payload);
    },
  },
});

export const { create, update } = client.actions;
export default client.reducer;
