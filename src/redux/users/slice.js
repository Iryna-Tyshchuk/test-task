import { createSlice } from '@reduxjs/toolkit';

import { fetchUsers, updateUser } from './operations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {
    handleFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, pendingHandler)
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = payload;
      })
      .addCase(fetchUsers.rejected, rejectHandler)

      .addCase(updateUser.pending, pendingHandler)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users = [...state.users, payload];
      })
      .addCase(updateUser.rejected, rejectHandler);
  },
});

function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}

function rejectHandler(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const usersReducer = usersSlice.reducer;
