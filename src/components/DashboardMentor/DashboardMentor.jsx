import React from 'react';
import './DashboardMentor.css';
import CoverDashMentor from './CoverDashMentor/CoverDashMentor';
import Pending from './Pending/Pending';

function DashboardMentor(props) {
    return (
        <div className="DashboardMentor">
            <CoverDashMentor />
            <Pending id={props.loginID} />
        </div>
    )
}

export default DashboardMentor;