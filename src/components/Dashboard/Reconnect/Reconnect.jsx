import React from 'react';
import './Reconnect.css';
import { Button, makeStyles } from "@material-ui/core";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { dashboardStudent } from "../../../utils/dashboard";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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

function Reconnect(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [mentors, setMentors] = React.useState();
    const [selectedMentor, setSelectedMentor] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [msg, setMsg] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await dashboardStudent.previousMentors(props.id);
            setMentors(data);
        }
        fetchData();
    }, []);

    const handleSubmit = async () => {
        const data = await dashboardStudent.addRequest(props.id, selectedMentor, description);
        setStatus(data.status);
        setMsg(data.msg);
        setDescription('');
    }

    const handleDescription = (event) => setDescription(event.target.value);


    const handleClickOpen = (mentorID) => {
        setSelectedMentor(mentorID);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const handleClickOpenSnackBar = () => setOpenSnackBar(true);
    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    };


    const renderMentors = () => {
        if (Array.isArray(mentors)) {
            return (
                <ul className={classes.list}>
                    {
                        mentors.map(mentor => {
                            return (
                                <li key={mentor._id}>
                                    <div className={classes.item}>
                                        <div className={classes.info}>
                                            <h5 style={nameStyle}>{mentor.fname} {mentor.lname}</h5>
                                            <p style={companyStyle}>{mentor.currentCompany}</p>
                                        </div>
                                        <Button variant="contained" color='primary' className={classes.button} onClick={() => handleClickOpen(mentor._id)}>Connect</Button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            )
        } else {
            return (
                <ul className={classes.list}>
                    <li key={props.id}>
                        <div className={classes.item}>
                            <h4>{mentors}</h4>
                        </div>
                    </li>
                </ul>
            )
        }
    }

    return (
        <div className="Reconnect">
            <div className="heading">
                <h2>Want to talk again with the mentors again?</h2>
            </div>
            {renderMentors()}
            <Dialog open={open} onClose={handleClose} aria-labelledby="description">
                <DialogTitle id="description">Description</DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ marginBottom: 30 }}>
                        Write a brief message describing your need for recounselling. Also Write
                        your expectations from the mentor to help them better guide you.
                    </DialogContentText>
                    <TextareaAutosize
                        style={{
                            width: '100%',
                            borderRadius: '5px',
                            padding: 10,
                            boxSizing: 'border-box'
                        }}
                        aria-label="description"
                        rowsMin={8}
                        placeholder="Write your message here..."
                        value={description}
                        onChange={handleDescription}
                    />
                </DialogContent>
                <DialogActions>
                    <Button style={{ margin: '0 15px 10px 0' }} variant="contained" onClick={() => { handleSubmit(); handleClose(); handleClickOpenSnackBar(); }} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity={status}>
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Reconnect;