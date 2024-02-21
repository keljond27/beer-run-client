import { createSlice } from '@reduxjs/toolkit';

import { addType, deleteTypeById, getTypeById, getTypes, updateTypeById } from '../api/types';

interface TypeState {
  typeData: any;
  loading: boolean;
  error: string | null;
}

const initialState: TypeState = {
  typeData: undefined,
  loading: false,
  error: null,
}

const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getTypes
    builder.addCase(getTypes.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getTypes.fulfilled, (state, action) => {
      state.loading = false;
      state.typeData = action.payload;
    })
    builder.addCase(getTypes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while getting types';
    })
    //getTypeById
    builder.addCase(getTypeById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getTypeById.fulfilled, (state, action) => {
      state.loading = false;
      state.typeData = action.payload;
    })
    builder.addCase(getTypeById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while getting type by id';
    })
    //addType
    builder.addCase(addType.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(addType.fulfilled, (state, action) => {
      state.loading = false;
      state.typeData = action.payload;
    })
    builder.addCase(addType.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while adding type';
    })
    //updateTypeById
    builder.addCase(updateTypeById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(updateTypeById.fulfilled, (state, action) => {
      state.loading = false;
      state.typeData = action.payload;
    })
    builder.addCase(updateTypeById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while updating type by id';
    })
    //deleteTypeById
    builder.addCase(deleteTypeById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(deleteTypeById.fulfilled, (state, action) => {
      state.loading = false;
      state.typeData = action.payload;
    })
    builder.addCase(deleteTypeById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while deleting type by id';
    })
  }
});

export default typeSlice.reducer;
