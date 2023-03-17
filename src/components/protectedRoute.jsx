import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const auth = useSelector((state) => state.color.auth);
  return (
    <>
        
        {(auth)?children:<Navigate to={'/login'} />}
    </>
  )
}

export default ProtectedRoute