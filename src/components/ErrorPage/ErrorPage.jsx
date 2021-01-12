import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './ErrorPage.css';
import errImage from './error-page.jpg';

function ErrorPage() {
    const history = useHistory();

    return (
        <div className="ErrorPage">
            <div className="image-container">
                <img src={errImage} alt="Error 404" />
            </div>
            <div className="text">
                <h1>OOH!!</h1>
                <h2>Looks like you are lost...</h2>
                <p>The page you have been looking for might have been moved to some other location or has been removed or had its name changed or might never existed</p>
                <h5>Ahh!! Nevermind</h5>
                <div className="buttons">
                    <Button className="button" variant="contained" color="primary" onClick={() => history.goBack()}>Go Back</Button>
                    <Link className="button" to="/"><Button variant="contained" color="primary">Home</Button></Link>
                    <Link className="button" to="/contact"><Button variant="outlined" color="primary">Contact Us</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;