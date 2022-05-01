import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IIsOpen {
  isOpen: boolean;
}

const sidebar = createSlice({
  name: 'sidebar',
  initialState: <IIsOpen> {
    isOpen: false
  },
  reducers: {
    toggle(state, action: PayloadAction<IIsOpen>) {
      state.isOpen = action.payload.isOpen ;
    }
  }
});

export const { toggle } = sidebar.actions;
export default sidebar.reducer;