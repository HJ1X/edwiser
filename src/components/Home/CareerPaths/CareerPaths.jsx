import React from 'react';
import './CareerPaths.css';
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    buttons: {
        marginBottom: 50,
        maxWidth: 900
    },
    button: {
        padding: '10px 40px',
        textTransform: 'capitalize',
        borderRadius: 25,
        marginRight: 30,
        marginBottom: 30
    }
}))

function CareerPaths() {
    const classes = useStyles();

    return (
        <div className="CareerPaths">
            <div className="heading">
                <h2>Whichever Career you choose, there's a <span>EdWiser</span> Mentor to guide.</h2>
            </div>
            <div className={classes.buttons}>
                <Button size='large' variant="outlined" className={classes.button}>Web Development</Button>
                <Button size='large' variant="outlined" className={classes.button}>Web Design</Button>
                <Button size='large' variant="outlined" className={classes.button}>Data Science</Button>
                <Button size='large' variant="outlined" className={classes.button}>Artificial Intelligence</Button>
                <Button size='large' variant="outlined" className={classes.button}>Database Administrators</Button>
                <Button size='large' variant="outlined" className={classes.button}>Network Securities</Button>
                <Button size='large' variant="outlined" className={classes.button}>Software Engineering</Button>
                <Button size='large' variant="outlined" className={classes.button}>Marketing</Button>
                <Button size='large' variant="outlined" className={classes.button}>Publicity</Button>
            </div>
        </div>
    )
}

export default CareerPaths;