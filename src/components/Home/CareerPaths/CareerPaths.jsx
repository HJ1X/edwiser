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
                <Button size='large' variant="outlined" className={classes.button}>anything and yo</Button>
                <Button size='large' variant="outlined" className={classes.button}>anything</Button>
                <Button size='large' variant="outlined" className={classes.button}>anything</Button>
                <Button size='large' variant="outlined" className={classes.button}>anything</Button>
                <Button size='large' variant="outlined" className={classes.button}>anything</Button>
                <Button size='large' variant="outlined" className={classes.button}>anything</Button>
                <Button size='large' variant="outlined" className={classes.button}>anything</Button>
                <Button size='large' variant="outlined" className={classes.button}>anything</Button>
                <Button size='large' variant="outlined" className={classes.button}>anything</Button>
            </div>
        </div>
    )
}

export default CareerPaths;