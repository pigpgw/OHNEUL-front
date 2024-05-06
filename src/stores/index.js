import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from './slices/userSlice';
import announcementReducer from './slices/announcementSlice';

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    announcement: announcementReducer,
  },
});

export default store;
