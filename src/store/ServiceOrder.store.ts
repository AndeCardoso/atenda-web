import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IServiceOrder } from 'models';

const serviceOrder = createSlice({
  name: 'serviceOrder',
  initialState: <IServiceOrder>{},
  reducers: {
    create(state: IServiceOrder, action: PayloadAction<IServiceOrder>) {
      state = { ...action.payload };

      // state.client = action.payload.client;
      // state.device = action.payload.device;
      // state.accessories = action.payload.accessories;
      // state.reportedIssues = action.payload.reportedIssues;
      // state.findedIssues = action.payload.findedIssues;
      // state.performedServices = action.payload.performedServices;
      // state.technician = action.payload.technician;
    },
    update(state: IServiceOrder, action: PayloadAction<IServiceOrder>) {
      state = { ...action.payload };

      // state.client = action.payload.client;
      // state.device = action.payload.device;
      // state.accessories = action.payload.accessories;
      // state.reportedIssues = action.payload.reportedIssues;
      // state.findedIssues = action.payload.findedIssues;
      // state.performedServices = action.payload.performedServices;
      // state.technician = action.payload.technician;
    },
    getById(state: IServiceOrder, action: PayloadAction<number>) {
      console.log('getById ' + action.payload);
    },
  },
});

export const { create, update } = serviceOrder.actions;
export default serviceOrder.reducer;
