import React from 'react';
import './DashboardMentor.css';
import CoverDashMentor from './CoverDashMentor/CoverDashMentor';
import Pending from './Pending/Pending';

function DashboardMentor() {
    return (
        <div className="DashboardMentor">
            <CoverDashMentor />
            <Pending />
        </div>
    )
}

export default DashboardMentor;