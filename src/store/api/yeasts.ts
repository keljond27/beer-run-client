import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from './_apiRequest';
import { AxiosRequestConfig } from 'axios';

import { Yeast } from '../../types/types';

type NewYeast = Omit<Yeast, "id">;

export const getYeasts = createAsyncThunk<Yeast[]>('yeasts/getYeasts', async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/yeasts',
  };
  return await apiRequest(config);
});

export const getYeastById = createAsyncThunk<Yeast, string>('yeasts/getYeastById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/yeasts/${id}`,
  };
  return await apiRequest(config);
})

export const addYeast = createAsyncThunk<void, NewYeast>('yeasts/addYeast', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/yeasts',
    data: data,
  };
  return await apiRequest(config);
})

export const updateYeastById = createAsyncThunk<void, Yeast>('yeasts/updateYeastById', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/yeasts/${data.id}`,
    data: data,
  };
  return await apiRequest(config);
})

export const deleteYeastById = createAsyncThunk<void, string>('yeasts/deleteYeastById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/yeasts/${id}`,
  };
  return await apiRequest(config);
})