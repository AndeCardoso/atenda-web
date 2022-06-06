import { createSlice } from '@reduxjs/toolkit';

const sidebar = createSlice({
  name: 'sidebar',
  initialState: <boolean>false,
  reducers: {
    toggle: (state: boolean) => state = !state
  }
});

export const { toggle } = sidebar.actions;
export default sidebar.reducer;