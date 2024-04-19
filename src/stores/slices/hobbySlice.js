/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const hobbySlice = createSlice({
  name: 'user',
  initialState: {
    hobby: null,
  },
  reducers: {
    setHobby: (state, action) => {
      state.hobby = action.payload;
    },
  },
});
export const { setHobby } = userSlice.actions;
export default hobbySlice.reducer;
