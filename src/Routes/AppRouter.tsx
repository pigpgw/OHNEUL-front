import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'Pages/Login';
import Favorite from 'Pages/Hobby';
import Mood from 'Pages/Mood';
import Home from 'Pages/Home';
import Theme from 'Pages/Theme';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home />}>
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
