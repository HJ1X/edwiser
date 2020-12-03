import React from 'react';
import './OtherPaths.css';
import { Fab, makeStyles } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const paths = [{
    path: 'web-dev',
    name: 'Web Development'
}, {
    path: 'web-design',
    name: 'Web Designing'
}, {
    path: 'data-science',
    name: 'Data Science'
}, {
    path: 'ai',
    name: 'Artificial Intelligence'
}, {
    path: 'dbms',
    name: 'Database Administrators'
}, {
    path: 'ns',
    name: 'Network Securities'
}, {
    path: 'software-engineering',
    name: 'Software Engineering'
}, {
    path: 'marketing',
    name: 'Marketing'
}, {
    path: 'publicity',
    name: 'Publicity'
}];

const useStyles = makeStyles(theme => ({
    list: {
        boxShadow: '0 5px 15px rgba(0,0,0,0.25), 0 5px 10px rgba(0,0,0,0.22)',
        listStyle: 'none',
        padding: '0 20px',
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItem: {
        borderBottom: '1px black solid',
        "&:last-child": {
            borderBottom: 'none'
        }
    },
    path: {
        fontSize: '1.5rem',
        margin: '10px 0'
    },
    button: {
        fontSize: '1rem',
        margin: '10px 0'
    }
}))

function OtherPaths() {
    const classes = useStyles();
    return (
        <div className="OtherPaths">
            <div className="heading">
                <h2>Not working well with {'Web Dev'}? Checkout this list of other paths.</h2>
            </div>
            <ul className={classes.list}>
                {
                    paths.map(path => {
                        return (
                            <li key={path.path} className={classes.listItem}>
                                <div className={classes.item}>
                                    <p className={classes.path}>{path.name}</p>
                                    <Fab className={classes.button} size="small" color="primary"><ArrowForwardIosIcon /></Fab>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default OtherPaths;