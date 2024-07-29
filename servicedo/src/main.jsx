import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeRegister from './pages/EmployeeRegister/EmployeeRegister.jsx';
import UserRegister from './pages/UserRegister/UserRegister.jsx';
import Sign_in from './pages/Sign_in/Sign_in.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/employeeRegister' element={<EmployeeRegister />} />
        <Route path='/userRegister' element={<UserRegister />} />
        <Route path='/Sign_in' element={<Sign_in />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
