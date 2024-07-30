import React from 'react';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../Services/AuthService';

const Sidebar = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        AuthService.logout();
        onLogout();
        navigate('/login'); 
    };

    return (
        <div className="sidebar">
            <div className="profile">
                <img 
                    src={`${process.env.PUBLIC_URL}/Logo.jpg`} 
                    alt="Profile" 
                    className="profile-img" 
                />
                <h3 className="profile-name">AlumniUG</h3>
            </div>
            <ul>
                <li>
                    <Link to="/friends">Amigos</Link>
                </li>
                <li>
                    <Link to="/posts">Publicaciones</Link>
                </li>
                <li>
                    <Link to="/reactions">Reacciones</Link>
                </li>
                <li>
                    <Link to="/comments">Comentarios</Link>
                </li>
                <li>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;