import React from 'react';
import './Login.css';
import biglogo from './edwiser-big.webp';
import LoginForm from '../LoginForm/LoginForm';

function Login() {
    return (
        <div className="Login">
            <div className="Body">
                <div className="image-container">
                    <img src={biglogo} alt="Edwiser" />
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login;