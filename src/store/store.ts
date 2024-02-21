import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import profileReducer from './slices/profileSlice';
import recipeReducer from './slices/recipeSlice';
import typeReducer from './slices/typeSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    profiles: profileReducer,
    recipes: recipeReducer,
    types: typeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch