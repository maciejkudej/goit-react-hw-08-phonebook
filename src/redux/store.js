import { configureStore } from '@reduxjs/toolkit';

import { contactSlice } from './slices/contactSlice';
import { FilterSlice } from './slices/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactSlice.reducer,

    filter: FilterSlice.reducer,
  },
});
