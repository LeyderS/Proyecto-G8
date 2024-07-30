import React, { useState } from 'react';
import ReactionService from '../Services/ReactionService';
import './Reactions.css';

const Reactions = () => {
    const [reactionData, setReactionData] = useState({
        user_id: '',
        publicacion_id: '',
        tipo_reaccion: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setReactionData({
            ...reactionData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ReactionService.addReaction(reactionData);
            if (response.result) {
                setMessage('Reacción registrada exitosamente');
            } else {
                setMessage('Error al registrar la reacción');
            }
        } catch (error) {
            setMessage('Error al registrar la reacción');
        }
    };

    return (
        <div className="reaction-form">
            <h2>Registrar Reacción</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="user_id">ID de Usuario</label>
                    <input
                        type="number"
                        id="user_id"
                        name="user_id"
                        value={reactionData.user_id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="publicacion_id">ID de Publicación</label>
                    <input
                        type="number"
                        id="publicacion_id"
                        name="publicacion_id"
                        value={reactionData.publicacion_id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tipo_reaccion">Tipo de Reacción</label>
                    <input
                        type="text"
                        id="tipo_reaccion"
                        name="tipo_reaccion"
                        value={reactionData.tipo_reaccion}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Reaccionar</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default Reactions;