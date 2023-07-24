import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

function Router() {

    return (
        <Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Navigate to="/" />} />            
        </Routes>
    );
}

export default Router;