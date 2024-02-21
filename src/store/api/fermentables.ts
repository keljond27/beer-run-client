import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from './_apiRequest';
import { AxiosRequestConfig } from 'axios';

import { Fermentable } from '../../types/types';

type NewFermentable = Omit<Fermentable, "id">;

export const getFermentables = createAsyncThunk<Fermentable[]>('fermentables/getFermentables', async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/fermentables',
  };
  return await apiRequest(config);
});

export const getFermentableById = createAsyncThunk<Fermentable, string>('fermentables/getFermentableById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/fermentables/${id}`,
  };
  return await apiRequest(config);
})

export const addFermentable = createAsyncThunk<void, NewFermentable>('fermentables/addFermentable', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/fermentables',
    data: data,
  };
  return await apiRequest(config);
})

export const updateFermentableById = createAsyncThunk<void, Fermentable>('fermentables/updateFermentableById', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/fermentables/${data.id}`,
    data: data,
  };
  return await apiRequest(config);
})

export const deleteFermentableById = createAsyncThunk<void, string>('fermentables/deleteFermentableById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/fermentables/${id}`,
  };
  return await apiRequest(config);
})