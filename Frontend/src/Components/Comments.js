import React, { useState } from 'react';
import CommentService from '../Services/CommentService';
import './Comments.css';

const Comments = () => {
    const [userId, setUserId] = useState('');
    const [postId, setPostId] = useState('');
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await CommentService.addComment({ user_id: userId, publicacion_id: postId, comentario: comment });
        setMessage(response.message);
    };

    return (
        <div className="comment-form-container">
            <h2>Agregar Comentario</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userId">User ID</label>
                    <input
                        type="number"
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postId">Post ID</label>
                    <input
                        type="number"
                        id="postId"
                        value={postId}
                        onChange={(e) => setPostId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Comentario</label>
                    <input
                        type="text"
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Agregar Comentario</button>
            </form>
            {message && <div className="message">{message}</div>}
        </div>
    );
};

export default Comments;


