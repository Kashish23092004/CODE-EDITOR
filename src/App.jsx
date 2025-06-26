import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Signin from './Component/Signin';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;

