import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from './_apiRequest';
import { AxiosRequestConfig } from 'axios';

import { Addition } from '../../types/types';

type NewAddition = Omit<Addition, "id">;

export const getAdditions = createAsyncThunk<Addition[]>('additions/getAdditions', async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/additions',
  };
  return await apiRequest(config);
});

export const getAdditionById = createAsyncThunk<Addition, string>('additions/getAdditionById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/additions/${id}`,
  };
  return await apiRequest(config);
})

export const addAddition = createAsyncThunk<void, NewAddition>('additions/addAddition', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/additions',
    data: data,
  };
  return await apiRequest(config);
})

export const updateAdditionById = createAsyncThunk<void, Addition>('additions/updateAdditionById', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/additions/${data.id}`,
    data: data,
  };
  return await apiRequest(config);
})

export const deleteAdditionById = createAsyncThunk<void, string>('additions/deleteAdditionById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/additions/${id}`,
  };
  return await apiRequest(config);
})