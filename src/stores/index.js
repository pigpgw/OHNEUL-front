import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './slices/userSlice';
import InfoSlice from './slices/InfoSlice';

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    InfoSlice,
  },
});

export default store;
