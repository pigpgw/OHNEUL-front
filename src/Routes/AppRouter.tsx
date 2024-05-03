import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Redirect from 'Components/Auth/Redirect';
import io from 'socket.io-client';
import Admin from 'pages/Admin';
import ManageUsers from 'pages/admin/ManageUsers';
import EditHobby from 'pages/admin/EditHobby';
import EditTheme from 'pages/admin/EditTheme';
import EditMood from 'pages/admin/EditMood';
import PostAnnouncement from 'pages/admin/PostAnnouncement';

const Home = React.lazy(() => import('pages/Home'));
const Favorite = React.lazy(() => import('pages/Hobby'));
const Mood = React.lazy(() => import('pages/Mood'));
const Theme = React.lazy(() => import('pages/Theme'));
const MyPage = React.lazy(() => import('pages/MyPage'));
const Checkout = React.lazy(() => import('pages/Checkout'));
const Success = React.lazy(() => import('pages/Success'));
const Fail = React.lazy(() => import('pages/Fail'));
const Chat = React.lazy(() => import('pages/Chat'));
const CoinHistory = React.lazy(() => import('pages/CoinHistory'));

const socket = io('http://localhost:4000');

function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path="/login/kakao" element={<Redirect />} />
          <Route path="/login/naver" element={<Redirect />} />
          <Route path="/" element={<Login />} />
          <Route path="/">
            <Route path="" element={<Home />}>
              <Route path="favorite" element={<Favorite />} />
              <Route path="mood" element={<Mood />} />
              <Route path="theme" element={<Theme socket={socket} />} />
              <Route path="mypage" element={<MyPage />} />
            </Route>
          </Route>
          <Route path="/payment" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/chat" element={<Chat socket={socket} />} />
          <Route path="/coinhistory" element={<CoinHistory />} />
          <Route path="/*" element={<NotFound />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="manageusers" element={<ManageUsers />} />
            <Route path="edithobby" element={<EditHobby />} />
            <Route path="edittheme" element={<EditTheme />} />
            <Route path="editmood" element={<EditMood />} />
            <Route path="postannouncement" element={<PostAnnouncement />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
