import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from './_apiRequest';
import { AxiosRequestConfig } from 'axios';

import { Recipe } from '../../types/types';

type NewRecipe = Omit<Recipe, "id">;

export const getRecipes = createAsyncThunk<Recipe[]>('recipes/getRecipes', async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/recipes',
  };
  return await apiRequest(config);
});

export const getRecipeById = createAsyncThunk<Recipe, string>('recipes/getRecipeById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/recipes/${id}`,
  };
  return await apiRequest(config);
})

export const addRecipe = createAsyncThunk<void, NewRecipe>('recipes/addRecipe', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/recipes',
    data: data,
  };
  return await apiRequest(config);
})

export const updateRecipeById = createAsyncThunk<void, Recipe>('recipes/updateRecipeById', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/recipes/${data.id}`,
    data: data,
  };
  return await apiRequest(config);
})

export const deleteRecipeById = createAsyncThunk<void, string>('recipes/deleteRecipeById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/recipes/${id}`,
  };
  return await apiRequest(config);
})
