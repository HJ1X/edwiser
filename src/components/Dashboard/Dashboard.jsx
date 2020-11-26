import React from 'react';
import './Dashboard.css';
import CoverDash from './CoverDash/CoverDash';
import Reconnect from './Reconnect/Reconnect';
import NewMentors from './NewMentors/NewMentors';

function Dashboard() {
    return (
        <div className="Dashboard">
            <CoverDash />
            <Reconnect />
            <NewMentors />
        </div>
    )
}

export default Dashboard;