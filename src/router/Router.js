import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import User from '../pages/User'
//import Userid from '../components/Nav'
//import Averagesession from '../components/Objectifs'
//import Performance from '../components/KPI'
//import Activity from '../components/Card'

// Création du router
const Router = () => {
  return (
    <Routes>
      <Route index element={<User />} />
      <Route path="user" element={<User />} />
      <Route path="user/:id" element={<User />} />
    </Routes>
  );
};

export default Router;