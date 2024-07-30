const API_URL = 'http://localhost:1008';

const addFriend = async (userId, amigoId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_URL}/amigo`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId, amigo_id: amigoId }),
    });

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error adding friend: ${errorMessage}`);
    }

    return response.json();
};

const FriendService = {
    addFriend,
};

export default FriendService;
