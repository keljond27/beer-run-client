import { createSlice } from '@reduxjs/toolkit';

import { addProfile, deleteProfileById, getProfileById, getProfiles, updateProfileById } from '../api/profiles';

interface ProfileState {
  profileData: any;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  profileData: undefined,
  loading: false,
  error: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getProfiles
    builder.addCase(getProfiles.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getProfiles.fulfilled, (state, action) => {
      state.loading = false;
      state.profileData = action.payload;
    })
    builder.addCase(getProfiles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while getting profiles';
    })
    //getProfileById
    builder.addCase(getProfileById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getProfileById.fulfilled, (state, action) => {
      state.loading = false;
      state.profileData = action.payload;
    })
    builder.addCase(getProfileById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while getting profile by id';
    })
    //addProfile
    builder.addCase(addProfile.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(addProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profileData = action.payload;
    })
    builder.addCase(addProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while adding profile';
    })
    //updateProfileById
    builder.addCase(updateProfileById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(updateProfileById.fulfilled, (state, action) => {
      state.loading = false;
      state.profileData = action.payload;
    })
    builder.addCase(updateProfileById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while updating profile by id';
    })
    //deleteProfileById
    builder.addCase(deleteProfileById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(deleteProfileById.fulfilled, (state, action) => {
      state.loading = false;
      state.profileData = action.payload;
    })
    builder.addCase(deleteProfileById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while deleting profile by id';
    })
  }
});

export default profileSlice.reducer;
