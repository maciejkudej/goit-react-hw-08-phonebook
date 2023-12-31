import { createSlice } from '@reduxjs/toolkit';

export const FilterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    contactFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { contactFilter } = FilterSlice.actions;
