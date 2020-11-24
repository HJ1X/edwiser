import React from "react";
import './TabNav.css';

function TabNav(props) {
    let studentActive, mentorActive;

    if (props.selected === 'student') {
        studentActive = 'active';
    } else {
        mentorActive = 'active';
    }

    return (
        <div className="TabNav">
            <button className={'btn ' + studentActive} onClick={ () => props.setSelected('student') }>Student</button>
            <button className={'btn ' + mentorActive} onClick={ () => props.setSelected('mentor') }>Mentor</button>
        </div>
    );
}

export default TabNav;