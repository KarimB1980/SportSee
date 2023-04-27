import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import User from '../pages/User'
import ErrorPage from '../pages/ErrorPage'

// Creation of router
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;