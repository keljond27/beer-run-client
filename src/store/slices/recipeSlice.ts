import { createSlice } from '@reduxjs/toolkit';

import { addRecipe, deleteRecipeById, getRecipeById, getRecipes, updateRecipeById } from '../api/recipes';

interface RecipeState {
  recipeData: any;
  loading: boolean;
  error: string | null;
}

const initialState: RecipeState = {
  recipeData: undefined,
  loading: false,
  error: null,
}

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //getRecipes
    builder.addCase(getRecipes.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getRecipes.fulfilled, (state, action) => {
      state.loading = false;
      state.recipeData = action.payload;
    })
    builder.addCase(getRecipes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while getting recipes';
    })
    //getRecipeById
    builder.addCase(getRecipeById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getRecipeById.fulfilled, (state, action) => {
      state.loading = false;
      state.recipeData = action.payload;
    })
    builder.addCase(getRecipeById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while getting recipe by id';
    })
    //addRecipe
    builder.addCase(addRecipe.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(addRecipe.fulfilled, (state, action) => {
      state.loading = false;
      state.recipeData = action.payload;
    })
    builder.addCase(addRecipe.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while adding recipe';
    })
    //updateRecipeById
    builder.addCase(updateRecipeById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(updateRecipeById.fulfilled, (state, action) => {
      state.loading = false;
      state.recipeData = action.payload;
    })
    builder.addCase(updateRecipeById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while updating recipe by id';
    })
    //deleteRecipeById
    builder.addCase(deleteRecipeById.pending, (state) =>{
      state.loading = true;
      state.error = null;
    })
    builder.addCase(deleteRecipeById.fulfilled, (state, action) => {
      state.loading = false;
      state.recipeData = action.payload;
    })
    builder.addCase(deleteRecipeById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'An error occurred while deleting recipe by id';
    })
  }
});

export default recipeSlice.reducer;
