import React from 'react';
import { Navigate, Outlet, Link } from 'react-router-dom';

const PrivateCompronant = () => {
    const auth = localStorage.getItem("user");
    <li><Link to="/signup">Signup</Link></li>
    return auth ? <Outlet /> : <Navigate to="/signup" />
}

export default PrivateCompronant