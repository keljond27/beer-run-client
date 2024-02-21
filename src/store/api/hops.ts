import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from './_apiRequest';
import { AxiosRequestConfig } from 'axios';

import { Hop } from '../../types/types';

type NewHop = Omit<Hop, "id">;

export const getHops = createAsyncThunk<Hop[]>('hops/getHops', async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/hops',
  };
  return await apiRequest(config);
});

export const getHopById = createAsyncThunk<Hop, string>('hops/getHopById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/hops/${id}`,
  };
  return await apiRequest(config);
})

export const addHop = createAsyncThunk<void, NewHop>('hops/addHop', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/hops',
    data: data,
  };
  return await apiRequest(config);
})

export const updateHopById = createAsyncThunk<void, Hop>('hops/updateHopById', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/hops/${data.id}`,
    data: data,
  };
  return await apiRequest(config);
})

export const deleteHopById = createAsyncThunk<void, string>('hops/deleteHopById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/hops/${id}`,
  };
  return await apiRequest(config);
})