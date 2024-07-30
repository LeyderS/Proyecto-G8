const API_URL = 'http://localhost:1008';

const addReaction = async (reactionData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/reaccion`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reactionData)
    });
    return response.json();
};

const ReactionService = {
    addReaction,
};

export default ReactionService;
