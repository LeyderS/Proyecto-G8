const API_URL = 'http://localhost:1008';

const getPosts = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/publicacion`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return response.json();
};

const createPost = async (userId, content) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/publicacion`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: userId,
            contenido: content,
        }),
    });
    return response.json();
};

const PostService = {
    getPosts,
    createPost,
};

export default PostService;