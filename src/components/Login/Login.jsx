import React from 'react';
import './Login.css';
import biglogo from './edwiser-big.webp';
import LoginForm from '../LoginForm/LoginForm';

function Login(props) {
    return (
        <div className="Login">
            <div className="Body">
                <div className="image-container">
                    <img src={biglogo} alt="Edwiser" />
                </div>
                <LoginForm setLoginID={props.setLoginID} setIsLoggedIn={props.setIsLoggedIn} />
            </div>
        </div>
    )
}

export default Login;