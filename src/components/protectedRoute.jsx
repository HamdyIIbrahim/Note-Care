import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
    const auth = useSelector((state) => state.color.auth);
  return (
    <>
        
        {(!auth)?<Navigate to={'/login'} />:children}
    </>
  )
}

export default ProtectedRoute