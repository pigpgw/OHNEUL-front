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
    // 로그인시
    setAuth: (state, action) => {
      // state.value = action.payload; <- 여기
      return { ...state, value: action.payload }; // 수정
    },
    login: (state) => {
      // state.isLogin = true; <- 여기
      return { ...state, isLogin: true }; // 수정
    },
    // ------------------------------------------------
    // 로그아웃시
    clearAuth: (state) => {
      // state.value = { username: null, AccessToken: null, refreshToken: null }; <- 여기
      return {
        ...state,
        value: { username: null, AccessToken: null, refreshToken: null },
      }; // 수정
    },
    logout: (state) => {
      // state.isLogin = false; <- 여기
      return { ...state, isLogin: false }; // 수정
    },
  },
});

export const { setAuth, clearAuth, login, logout } = userSlice.actions;
export default userSlice.reducer;
