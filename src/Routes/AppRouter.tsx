import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'Pages/Login';
import Favorite from 'Pages/Favorite';
import Mood from 'Pages/Mood';
import Home from 'Pages/Home';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="favorite" element={<Favorite />} />
          <Route path="mood" element={<Mood />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
