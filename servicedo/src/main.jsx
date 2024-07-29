import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeRegister from './pages/EmployeeRegister/EmployeeRegister.jsx';
import UserRegister from './pages/UserRegister/UserRegister.jsx';
<<<<<<< HEAD
import HomePage from './pages/HomePage/HomePage.jsx';
=======
import Sign_in from './pages/Sign_in/Sign_in.jsx';
>>>>>>> 6f2df2610601523bf1d331dd6ac6d13c7450214e

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/employeeRegister' element={<EmployeeRegister />} />
        <Route path='/userRegister' element={<UserRegister />} />
<<<<<<< HEAD
        <Route path='/home' element={<HomePage />} />

=======
        <Route path='/Sign_in' element={<Sign_in />} />
>>>>>>> 6f2df2610601523bf1d331dd6ac6d13c7450214e
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
