import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import biglogo from './edwiser-big.webp';
import LoginForm from '../LoginForm/LoginForm';

function Login() {
    return (
        <div className="Login">
            <Header />
            <div className="container">
                <div className="image-container">
                    <img src={biglogo} alt="Edwiser"/>
                </div>
                <LoginForm />
            </div>
            <Footer />
        </div>
    )
}

export default Login;