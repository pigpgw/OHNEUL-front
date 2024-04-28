/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const InfoSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      user_mood: null,
      user_hobby: null,
    },
  },
  reducers: {
    setMood: (state, action) => {
      state.value.user_mood = action.payload.user_mood;
    },
    setHobby: (state, action) => {
      state.value.user_hobby = action.payload.user_hobby;
    },
  },
});

export const { setMood, setHobby } = InfoSlice.actions;
export default InfoSlice.reducer;
