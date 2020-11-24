import React from 'react';
import './MentorLogin.css';

function MentorLogin() {
    return (
        <div className="MentorLogin">
            <form action="" method="post">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default MentorLogin;