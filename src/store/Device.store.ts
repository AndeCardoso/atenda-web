import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDevice } from 'models';

const device = createSlice({
  name: 'device',
  initialState: <IDevice>{},
  reducers: {
    create(state: IDevice, action: PayloadAction<IDevice>) {
      state = { ...action.payload };
      // state.typeEquip = action.payload.typeEquip;
      // state.serialNumber = action.payload.serialNumber;
      // state.brand = action.payload.brand;
      // state.model = action.payload.model;
      // state.observations = action.payload.observations;
    },
    update(state: IDevice, action: PayloadAction<IDevice>) {
      state = { ...action.payload };
      // state.typeEquip = action.payload.typeEquip;
      // state.serialNumber = action.payload.serialNumber;
      // state.brand = action.payload.brand;
      // state.model = action.payload.model;
      // state.observations = action.payload.observations;
    },
    getById(state: IDevice, action: PayloadAction<number>) {
      console.log('getById ' + action.payload);
    },
    getAll(state: IDevice) {
      console.log(state);
    },
  },
});

export const { create, update } = device.actions;
export default device.reducer;
