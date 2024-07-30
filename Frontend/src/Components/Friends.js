import React, { useState } from 'react';
import FriendService from '../Services/FriendService';
import './Friends.css';

const Friends = () => {
    const [userId, setUserId] = useState('');
    const [amigoId, setAmigoId] = useState('');
    const [message, setMessage] = useState('');

    const handleAddFriend = async (e) => {
        e.preventDefault();
        try {
            const result = await FriendService.addFriend(userId, amigoId);
            setMessage(result.message || 'Amigo agregado exitosamente');
            setUserId(''); // Limpiar el formulario
            setAmigoId('');
        } catch (error) {
            setMessage(error.message || 'Error al agregar amigo');
        }
    };

    return (
        <div className="friends-container">
            <h2>Agregar Amigo</h2>
            <form onSubmit={handleAddFriend} className="add-friend-form">
                <input
                    type="number"
                    placeholder="ID del Usuario"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="ID del Amigo"
                    value={amigoId}
                    onChange={(e) => setAmigoId(e.target.value)}
                    required
                />
                <button type="submit">Agregar Amigo</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Friends;