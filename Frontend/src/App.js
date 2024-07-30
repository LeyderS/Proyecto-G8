import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Home from './Components/Home';
import Friends from './Components/Friends';
import Posts from './Components/Posts';
import Reactions from './Components/Reactions';
import Comments from './Components/Comments';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
                <Route path="/home" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} />
                <Route path="/friends" element={isAuthenticated ? <Friends /> : <Navigate to="/login" />} />
                <Route path="/posts" element={isAuthenticated ? <Posts /> : <Navigate to="/login" />} />
                <Route path="/reactions" element={isAuthenticated ? <Reactions /> : <Navigate to="/login" />} />
                <Route path="/comments" element={isAuthenticated ? <Comments /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
