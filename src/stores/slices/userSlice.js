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
      state.value = action.payload;
    },
    login: (state) => {
      state.isLogin = true;
    },
    clearAuth: (state) => {
      state.value = {
        username: null,
        AccessToken: null,
        refreshToken: null,
      };
    },

    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { setAuth, clearAuth, login, logout } = userSlice.actions;
export default userSlice.reducer;
