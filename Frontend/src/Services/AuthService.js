const API_URL = 'http://localhost:1008';

const login = async (email, password) => {
    const response = await fetch(`${API_URL}/security/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login_email: email, login_password: password }),
    });
    const data = await response.json();
    if (response.ok) {
        localStorage.setItem('token', data.token);
    } else {
        throw new Error(data.message);
    }
};

const logout = () => {
    localStorage.removeItem('token')
}


const AuthService = {
    login,
    logout,
};

export default AuthService;