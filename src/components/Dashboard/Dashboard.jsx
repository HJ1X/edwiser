import React from 'react';
import './Dashboard.css';
import CoverDash from './CoverDash/CoverDash';
import Reconnect from './Reconnect/Reconnect';
import NewMentors from './NewMentors/NewMentors';
import OtherPaths from './OtherPaths/OtherPaths';

function Dashboard() {
    return (
        <div className="Dashboard">
            <CoverDash />
            <Reconnect />
            <NewMentors />
            <OtherPaths />
        </div>
    )
}

export default Dashboard;