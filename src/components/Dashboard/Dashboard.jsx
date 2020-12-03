import React from 'react';
import './Dashboard.css';
import CoverDash from './CoverDash/CoverDash';
import Reconnect from './Reconnect/Reconnect';
import NewMentors from './NewMentors/NewMentors';
import OtherPaths from './OtherPaths/OtherPaths';

function Dashboard(props) {
    return (
        <div className="Dashboard">
            <CoverDash />
            <Reconnect id={props.loginID} />
            <NewMentors id={props.loginID} />
            <OtherPaths />
        </div>
    )
}

export default Dashboard;