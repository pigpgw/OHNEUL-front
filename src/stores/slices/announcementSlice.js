/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  announcements: [],
};

export const announcementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    setAnnouncements: (state, action) => {
      state.announcements = action.payload;
    },
  },
});
export const { setAnnouncements } = announcementSlice.actions;

export const selectAnnouncements = (state) => state.announcement.announcements;

export default announcementSlice.reducer;
