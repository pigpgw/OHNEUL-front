import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import KakaoRedirect from '../Components/Auth/KakaoRedirect';
import io from 'socket.io-client';
import Login from 'pages/Login';
import Favorite from 'pages/Hobby';
import Mood from 'pages/Mood';
import Home from 'pages/Home';
import Theme from 'pages/Theme';
import Chat from 'pages/Chat';
import NotFound from 'pages/NotFound';
import Redirect from 'Components/Auth/Redirect';
import MyPage from 'pages/MyPage';
import Checkout from 'pages/Checkout'

const socket = io('http://localhost:4000');

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login/kakao" element={<Redirect />}></Route>
        <Route path="/login/naver" element={<Redirect />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="favorite" element={<Favorite />} />
          <Route path="mood" element={<Mood />} />
          <Route path="theme" element={<Theme socket={socket} />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
        <Route path='/payment' element={<Checkout />}/>
        <Route path="/chat" element={<Chat socket={socket} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
