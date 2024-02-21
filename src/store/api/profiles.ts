import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from './_apiRequest';
import { AxiosRequestConfig } from 'axios';

import { Profile } from '../../types/types';

type NewProfile = Omit<Profile, "id">;

export const getProfiles = createAsyncThunk<Profile[]>('profiles/getProfiles', async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/profiles',
  };
  return await apiRequest(config);
});

export const getProfileById = createAsyncThunk<Profile, string>('profiles/getProfileById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/profiles/${id}`,
  };
  return await apiRequest(config);
})

export const addProfile = createAsyncThunk<void, NewProfile>('profiles/addProfile', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/profiles',
    data: data,
  };
  return await apiRequest(config);
})

export const updateProfileById = createAsyncThunk<void, Profile>('profiles/updateProfileById', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/profiles/${data.id}`,
    data: data,
  };
  return await apiRequest(config);
})

export const deleteProfileById = createAsyncThunk<void, string>('profiles/deleteProfileById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/profiles/${id}`,
  };
  return await apiRequest(config);
})