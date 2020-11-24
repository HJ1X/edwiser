import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Signup.css';

function Signup() {
    return (
        <div className="Signup">
            <Header />
            <div className="Body">
                <div className="SignupForm">
                    <form action="" method="post">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <input type="submit" value="Login" />
                    </form>
                    <p className='login'>Already a member ? <Link to="/login">Login here</Link>.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup;