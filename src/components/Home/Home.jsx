import React from 'react';
import CoverHome from './CoverHome/CoverHome';
import CareerPaths from "./CareerPaths/CareerPaths";
import MentorCompanies from "./MentorCompanies/MentorCompanies"
import GetStarted from "./GetStarted/GetStarted";

function Home() {
    return (
        <div className="Home">
            <CoverHome />
            <CareerPaths />
            <GetStarted />
            <MentorCompanies />
        </div>
    )
}

export default Home;