import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  deleteContact,
  addContact,
} from 'redux/contacts/contactsOperation';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.entities = [action.payload, ...state.entities];
    },
    [deleteContact.fulfilled](state, action) {
      state.entities = state.entities.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [fetchContacts.fulfilled](state, action) {
      state.entities = action.payload;
    },
  },
});

export default ContactSlice.reducer;
