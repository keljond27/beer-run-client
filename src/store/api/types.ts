import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from './_apiRequest';
import { AxiosRequestConfig } from 'axios';

import { Type } from '../../types/types';

type NewType = Omit<Type, "id">;

export const getTypes = createAsyncThunk<Type[]>('types/getTypes', async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/types',
  };
  return await apiRequest(config);
});

export const getTypeById = createAsyncThunk<Type, string>('types/getTypeById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/types/${id}`,
  };
  return await apiRequest(config);
})

export const addType = createAsyncThunk<void, NewType>('types/addType', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/types',
    data: data,
  };
  return await apiRequest(config);
})

export const updateTypeById = createAsyncThunk<void, Type>('types/updateTypeById', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/types/${data.id}`,
    data: data,
  };
  return await apiRequest(config);
})

export const deleteTypeById = createAsyncThunk<void, string>('types/deleteTypeById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/types/${id}`,
  };
  return await apiRequest(config);
})