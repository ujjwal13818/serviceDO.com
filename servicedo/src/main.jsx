import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeRegister from './pages/EmployeeRegister/EmployeeRegister.jsx';
import UserRegister from './pages/UserRegister/UserRegister.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/employeeRegister' element={<EmployeeRegister />} />
        <Route path='/userRegister' element={<UserRegister />} />
        <Route path='/home' element={<HomePage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
