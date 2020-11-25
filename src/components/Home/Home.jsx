import React from 'react';
import Cover from './Cover/Cover';
import CareerPaths from "./CareerPaths/CareerPaths";
import MentorCompanies from "./MentorCompanies/MentorCompanies"
import GetStarted from "./GetStarted/GetStarted";

function Home() {
    return (
        <div className="Home">
            <Cover />
            <CareerPaths />
            <GetStarted />
            <MentorCompanies />
        </div>
    )
}

export default Home;