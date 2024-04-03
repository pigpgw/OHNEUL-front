import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import KakaoRedirect from '../Components/Auth/KakaoRedirect';
// import AfterLogin from 'pages/AfterLogin';
// import io from 'socket.io-client';
import Login from 'pages/Login';
import Favorite from 'pages/Hobby';
import Mood from 'pages/Mood';
import Home from 'pages/Home';
import Theme from 'pages/Theme';
// import Chat from 'pages/Chat';
// import NotFound from 'pages/NotFound';
import Redirect from 'Components/Auth/Redirect';

// const socket = io('http://localhost:4000');
// const socket = io(
//   'https://port-0-ohneul-docker-44rk2blu3topxi.sel5.cloudtype.app/',
// );

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login -> AfterLogin -> Home */}
        {/* <Route path="/afterlogin" element={<AfterLogin></AfterLogin>}></Route> */}
        <Route path="/login/kakao" element={<Redirect />}></Route>
        <Route path="/login/naver" element={<Redirect />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />}>
          <Route path="favorite" element={<Favorite />} />
          <Route path="mood" element={<Mood />} />
          {/* <Route path="theme" element={<Theme socket={socket} />} /> */}
        </Route>
        <Route path="/mypage" element={<div>마이페이지</div>} />
        {/* <Route path="/chat" element={<Chat socket={socket} />} /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
