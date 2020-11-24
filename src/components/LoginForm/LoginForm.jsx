import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './LoginForm.css';
import TabNav from '../TabNav/TabNav';

function LoginForm() {
    const [selected, setSelected] = useState('student');

    return (
        <div className="LoginForm">
            <TabNav setSelected={setSelected} />
            <div className="MentorLogin">
                <form action="" method="post">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <input type="submit" value="Login" />
                </form>
            </div>
            <p className="create-account">Not a member yet ? <Link to="/signup">Create an account now</Link>.</p>
        </div>
    )
}

export default LoginForm;