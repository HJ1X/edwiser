import React from 'react';
import './Reconnect.css';
import { Button, makeStyles } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
    const [open, setOpen] = React.useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    };

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
                                    <Button variant="contained" color='primary' className={classes.button} onClick={handleClickOpen}>Connect</Button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <Dialog open={open} onClose={handleClose} aria-labelledby="description">
                <DialogTitle id="description">Description</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ marginBottom: 30 }}>
                        Write a brief message describing your need for recounselling. Also Write
                        your expectations from the mentor to help them better guide you.
                                            </DialogContentText>
                    <TextareaAutosize style={{ width: '100%', borderRadius: '5px', padding: 10, boxSizing: 'border-box' }} aria-label="description" rowsMin={8} placeholder="Write your message here..." />
                </DialogContent>
                <DialogActions>
                    <Button style={{ margin: '0 15px 10px 0' }} variant="contained" onClick={() => { handleClose(); handleClickOpenSnackBar(); }} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity="success">
                    Request Sent
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Reconnect;