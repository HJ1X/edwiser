import React from 'react';
import './Dashboard.css';
import CoverDash from './CoverDash/CoverDash';
import Reconnect from './Reconnect/Reconnect';

function Dashboard() {
    return (
        <div className="Dashboard">
            <CoverDash />
            <Reconnect />
        </div>
    )
}

export default Dashboard;