import React, { useEffect } from 'react';
import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({children}) => {
   if (localStorage.getItem("token")) {
     return children;
   } else {
     window.location.replace("http://localhost:5173/sign_in");
   }
}

export default ProtectedRoute