import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from '../components/Auth/SignUp/SignUpPage';
import HomePage from '../components/Pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
