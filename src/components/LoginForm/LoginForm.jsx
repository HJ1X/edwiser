import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './LoginForm.css';
import TabNav from '../TabNav/TabNav';
import StudentLogin from "./StudentLogin/StudentLogin";
import MentorLogin from "./MentorLogin/MentorLogin";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { pillTabsStylesHook } from '@mui-treasury/styles/tabs';

function LoginForm() {
    const [selected, setSelected] = useState('student');

    return (
        <div className="LoginForm">
            <TabNav selected={selected} setSelected={setSelected} />
            {selected === 'student' && <StudentLogin />}
            {selected === 'mentor' && <MentorLogin />}
            <p className="create-account">Not a member yet ? <Link to="/signup">Create an account now</Link>.</p>
        </div>
    )
}

export default LoginForm;