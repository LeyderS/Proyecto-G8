import React from 'react';
import './Home.css';
import Sidebar from './Sidebar';
import PostFeed from './PostFeed';
import SuggestedFriends from './SuggestedFriends';

const Home = ({ onLogout }) => {
    return (
        <div className="home-container">
            <Sidebar onLogout={onLogout} />
            <div className="content">
                <h1>Bienvenido a AlumniUG</h1>
                <PostFeed />
                <SuggestedFriends />
            </div>
        </div>
    );
};

export default Home;
