import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      username: null,
      AccessToken: null,
      refreshToken: null,
    },
    isLogin: false,
  },
  reducers: {
    setAuth: (state, action) => {
      const newState = state;
      newState.value = action.payload;
    },
    login: (state) => {
      const newState = state;
      newState.isLogin = true;
    },
    clearAuth: (state) => {
      const newState = state;
      newState.value = {
        username: null,
        AccessToken: null,
        refreshToken: null,
      };
    },

    logout: (state) => {
      const newState = state;
      newState.isLogin = false;
    },
  },
});

export const { setAuth, clearAuth, login, logout } = userSlice.actions;
export default userSlice.reducer;
