import React, { useState } from 'react';
import PostService from '../Services/PostService';
import './CreatePost.css';

const CreatePost = () => {
    const [userId, setUserId] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await PostService.createPost(userId, content);
            if (result.result) {
                setSuccess('Publicación creada exitosamente');
                setUserId(''); 
                setContent(''); 
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('Error creating post');
        }
    };

    return (
        <div className="create-post-container">
            <h2>Publicación</h2>
            <form onSubmit={handleSubmit} className="create-post-form">
                <input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="ID de Usuario"
                    required
                    className="create-post-input"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Escribe tu publicación aquí..."
                    required
                    className="create-post-textarea"
                />
                <button type="submit" className="create-post-button">Publicar</button>
            </form>
            {success && <p className="create-post-success">{success}</p>}
            {error && <p className="create-post-error">{error}</p>}
        </div>
    );
};

export default CreatePost;


