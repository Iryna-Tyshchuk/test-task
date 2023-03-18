import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers, postUser } from 'services/api';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const users = await getUsers();
      return users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (newUserInfo, thunkAPI) => {
    try {
      const response = await postUser(newUserInfo);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
