import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './slices/userSlice';
import hobbySliceReducer from './slices/hobbySlice';

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    hobbySliceReducer,
  },
});

export default store;
