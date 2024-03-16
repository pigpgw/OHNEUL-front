import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Favorite from 'pages/Favorite';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/favorite' element={<Favorite />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
