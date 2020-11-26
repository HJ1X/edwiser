import React from 'react';
import './Reconnect.css';
import { Button, makeStyles } from "@material-ui/core";

const mentors = [{
    id: 1,
    name: 'HJ',
    company: 'Amazon'
}, {
    id: 2,
    name: 'Guddu',
    company: 'Google'
}]

const useStyles = makeStyles(theme => ({
    list: {
        listStyle: 'none',
    },
    item: {
        boxShadow: '0 5px 15px rgba(0,0,0,0.25), 0 5px 10px rgba(0,0,0,0.22)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        margin: '20px 50px 20px 0px'
    },
    info: {

    }
}))

const nameStyle = {
    fontSize: '1.5rem',
    margin: '10px 0'
}

const companyStyle = {
    fontSize: '1rem',
    margin: '10px 0'
}

function Reconnect() {
    const classes = useStyles();

    return (
        <div className="Reconnect">
            <div className="heading">
                <h2>Want to talk again with the mentors again?</h2>
            </div>
            <ul className={classes.list}>
                {
                    mentors.map(mentor => {
                        return (
                            <li key={mentor.id}>
                                <div className={classes.item}>
                                    <div className={classes.info}>
                                        <h5 style={nameStyle}>{mentor.name}</h5>
                                        <p style={companyStyle}>{mentor.company}</p>
                                    </div>
                                    <Button variant="contained" color='primary' className={classes.button}>Connect</Button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Reconnect;