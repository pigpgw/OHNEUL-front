import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSliceReducer, { userSlice } from './slices/userSlice';

const store = configureStore({
  reducer: {
    userSliceReducer,
  },
});
export const rootReducer = combineReducers({
  user: userSlice,
});
export default store;
