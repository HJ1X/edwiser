import React from 'react';
import './StudentLogin.css';

function StudentLogin() {
    return (
        <div className="StudentLogin">
            <form action="" method="post">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}

export default StudentLogin;