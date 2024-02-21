import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from './_apiRequest';
import { AxiosRequestConfig } from 'axios';

import { User } from '../../types/types';

type NewUser = Omit<User, "id">;

export const getUsers = createAsyncThunk<User[]>('users/getUsers', async () => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: '/users',
  };
  return await apiRequest(config);
});

export const getUserById = createAsyncThunk<User, string>('users/getUserById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/users/${id}`,
  };
  return await apiRequest(config);
})

export const addUser = createAsyncThunk<void, NewUser>('users/addUser', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: '/users',
    data: data,
  };
  return await apiRequest(config);
})

export const updateUserById = createAsyncThunk<void, User>('users/updateUserById', async (data) => {
  const config: AxiosRequestConfig = {
    method: 'PUT',
    url: `/users/${data.id}`,
    data: data,
  };
  return await apiRequest(config);
})

export const deleteUserById = createAsyncThunk<void, string>('users/deleteUserById', async (id) => {
  const config: AxiosRequestConfig = {
    method: 'DELETE',
    url: `/users/${id}`,
  };
  return await apiRequest(config);
})