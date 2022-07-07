import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from '../components/Auth/SignUp/SignUpPage';

function App() {
  return (
    <Routes>
      <Route path="/signUp" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
