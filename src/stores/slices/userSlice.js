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
    
      return { ...state, value: action.payload }; 
    },
    login: (state) => {

      return { ...state, isLogin: true }; 
    },
    // ------------------------------------------------
    // 로그아웃시
    clearAuth: (state) => {
   
      return {
        ...state,
        value: { username: null, AccessToken: null, refreshToken: null },
      }; 
    },
    logout: (state) => {
      
      return { ...state, isLogin: false }; 
    },
  },
});

export const { setAuth, clearAuth, login, logout } = userSlice.actions;
export default userSlice.reducer;
