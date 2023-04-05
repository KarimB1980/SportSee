import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import User from '../pages/User'

// Création du router
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="user/:userid" element={<User />} />
    </Routes>
  );
};

export default Router;