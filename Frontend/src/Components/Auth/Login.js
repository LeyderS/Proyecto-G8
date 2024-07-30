import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Por favor, ingrese sus credenciales');
            return;
        }

        try {
            await AuthService.login(email, password);
            onLogin();
            navigate('/home');
        } catch (error) {
            toast.error('Credenciales incorrectas');
        }
    };

    const switchPasswordType = () => {
        let passInput = document.getElementById("password");
        let passIcon = document.getElementById("passIcon");
        if (passInput.type === "password") {
            passInput.type = "text";
            passIcon.classList.remove("bi-eye");
            passIcon.classList.add("bi-eye-slash");
        } else {
            passInput.type = "password";
            passIcon.classList.remove("bi-eye-slash");
            passIcon.classList.add("bi-eye");
        }
    };

    return (
        <>
            <ToastContainer />
            <form className="form" onSubmit={handleLogin}>
                <img src={`${process.env.PUBLIC_URL}/Logo.jpg`} alt="Logo" />
                <h1>Login</h1>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <div className="form-group">
                    <input 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button className="btn-show" type="button" onClick={switchPasswordType}>
                        <i id="passIcon" className="bi bi-eye"></i>
                    </button>
                </div>
                <button className="btn-primary" type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;