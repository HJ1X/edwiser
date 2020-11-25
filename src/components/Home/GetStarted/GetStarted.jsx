import React from 'react';
import './GetStarted.css';
import { Button, makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
    button: {
        position: 'relative',
        top: 10,
        borderRadius: 20
    }
}))

function GetStarted() {
    const classes = useStyles();

    return (
        <div className="GetStarted">
            <div className="container">
                <div className="box">
                    <h3>Student?</h3>
                    <h4>Meet with actual professionals and learn from their experience</h4>
                    <Button size="large" variant="contained" className={classes.button} color="secondary" endIcon={<ArrowForwardIosIcon />}>Get Started Now for free</Button>
                </div>
                <div className="box">
                    <h3>Mentor?</h3>
                    <h4>Want to share your experience and help others</h4>
                    <Button size="large" variant="contained" className={classes.button} color="primary" endIcon={<ArrowForwardIosIcon />}>Fill Form now</Button>
                </div>
            </div>
        </div>
    )
}

export default GetStarted;