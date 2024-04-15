/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      user_id: null,
      refreshToken: null,
      provider: null,
      isAdmin: false,
    },
    isLogin: false,
  },
  reducers: {
    // 로그인시
    setAuth: (state, action) => {
      state.value.user_id = action.payload.user_id;
      state.value.refreshToken = action.payload.refreshToken;
      state.value.provider = action.payload.provider;
      state.value.isAdmin = action.payload.isAdmin;
    },
    login: (state) => {
      state.isLogin = true;
    },
    // ------------------------------------------------
    // 로그아웃시
    clearAuth: (state) => {
      state.value.user_id = null;
      state.value.refreshToken = null;
      state.value.provider = null;
      state.value.isAdmin = false;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { setAuth, clearAuth, login, logout } = userSlice.actions;
export default userSlice.reducer;
