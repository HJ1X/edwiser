import React, {useState} from 'react';
import './LoginForm.css';
import TabNav from '../TabNav/TabNav';
import StudentLogin from "./StudentLogin/StudentLogin";
import MentorLogin from "./MentorLogin/MentorLogin";

function LoginForm() {
    const [selected, setSelected] = useState('student');

    return (
        <div className="container">
            <TabNav selected={selected} setSelected={setSelected} />
            {selected === 'student' && <StudentLogin />}
            {selected === 'mentor' && <MentorLogin />}
        </div>
    )
}

export default LoginForm;