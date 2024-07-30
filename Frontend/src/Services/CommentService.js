const API_URL = 'http://localhost:1008';

const addComment = async (commentData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/comentario`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentData),
    });
    return response.json();
};

const CommentService = {
    addComment,
};

export default CommentService;