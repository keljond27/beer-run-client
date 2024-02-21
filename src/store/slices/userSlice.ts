import { createSlice } from '@reduxjs/toolkit';

import { addUser, deleteUserById, getUserById, getUsers, updateUserById } from '../api/users';

interface UserState {
  userData: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userData: undefined,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getUsers
    builder.addCase(getUsers.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while getting users';
    })
    //getUserById
    builder.addCase(getUserById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    })
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while getting user by id';
    })
    //addUser
    builder.addCase(addUser.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    })
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while adding user';
    })
    //updateUserById
    builder.addCase(updateUserById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(updateUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    })
    builder.addCase(updateUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while updating user by id';
    })
    //deleteUserById
    builder.addCase(deleteUserById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(deleteUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    })
    builder.addCase(deleteUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while deleting user by id';
    })
  }
});

export default userSlice.reducer;
