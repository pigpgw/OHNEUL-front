import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Favorite from '../pages/Favorite';
import Mood from '../pages/Mood';
import Home from '../pages/Home';
import Redirect from '../Components/Auth/Redirect';
// import KakaoRedirect from '../Components/Auth/KakaoRedirect';
import AfterLogin from '../pages/AfterLogin';


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login -> AfterLogin -> Home */}
        <Route path="/afterlogin" element={<AfterLogin></AfterLogin>}></Route>
        <Route path="/login/kakao" element={<Redirect />}></Route>
        <Route path="/login/naver" element={<Redirect />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="favorite" element={<Favorite />} />
          <Route path="mood" element={<Mood />} />
          <Route path='theme' element={<Theme />} />
        </Route>
        <Route path="/mypage" element={<div>마이페이지</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
