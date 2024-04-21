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
import Checkout from 'pages/Checkout';
import Success from 'pages/Success';
import Fail from 'pages/Fail';
import Admin from 'pages/Admin';
import EditHobby from 'pages/admin/EditHobby';
import ManageUsers from 'pages/admin/ManageUsers';
import EditTheme from 'pages/admin/EditTheme';
import EditMood from 'pages/admin/EditMood';
import PostAnnouncement from 'pages/admin/PostAnnouncement';

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
        <Route path="/payment" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/chat" element={<Chat socket={socket} />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="manageusers" element={<ManageUsers />} />
          <Route path="edithobby" element={<EditHobby />} />
          <Route path="edittheme" element={<EditTheme />} />
          <Route path="editmood" element={<EditMood />} />
          <Route path="postannouncement" element={<PostAnnouncement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
