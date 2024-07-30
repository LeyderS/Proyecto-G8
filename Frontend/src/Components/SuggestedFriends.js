import React from 'react';
import './SuggestedFriends.css';

const SuggestedFriends = () => {
    return (
        <div className="suggested-friends">
            <h2>Amigos Sugeridos</h2>
            <div className="friend">
                <img src="AVHM.jpg" alt="User Avatar" />
                <div>
                    <h3>Juan Pérez</h3>
                    <button>Agregar</button>
                </div>
            </div>
            <div className="friend">
                <img src="AVM.png" alt="User Avatar" />
                <div>
                    <h3>María García</h3>
                    <button>Agregar</button>
                </div>
            </div>
        </div>
    );
};

export default SuggestedFriends;