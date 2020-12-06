import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button, TextField, makeStyles, IconButton, Collapse } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import './LoginForm.css';
import TabNav from '../TabNav/TabNav';
import { loginMentor, loginStudent } from '../../utils/form';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    root: {
        display: 'block',
        marginTop: 20,
        borderRadius: 20
    }
})

const formValues = {};
let id = '';
let msg = '';

function LoginForm(props) {
    const classes = useStyles();
    const history = useHistory();

    const [selected, setSelected] = useState('student');
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        const { id, value } = event.target;
        formValues[id] = value;
    }

    const handleSubmit = async event => {
        event.preventDefault();
        if (selected === 'student') {
            ({ id, msg } = await loginStudent.submitForm(formValues));
        } else {
            ({ id, msg } = await loginMentor.submitForm(formValues));
        }
        setOpen(false);
        setOpen(true);
        if (id) {
            props.setLoginID(id);
            if (selected === 'student') {
                props.setIsLoggedIn('student');
                history.push('/dashboard');
            } else {
                props.setIsLoggedIn('mentor');
                history.push('/dashboard-mentor');
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setOpen(false)
        }, 6000)
    }, [open]);

    return (
        <div className="LoginForm">
            <TabNav setSelected={setSelected} />
            <h1>{selected.replace(/^\w/, (c) => c.toUpperCase())} Login</h1>
            <div className="Form">
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        fullWidth={true}
                        size="small"
                        className={classes.root}
                        variant="outlined"
                        id="username"
                        type="text"
                        label="Username"
                        onChange={handleChange} />
                    <TextField
                        required
                        fullWidth={true}
                        size="small"
                        className={classes.root}
                        variant="outlined"
                        id="password"
                        type="password"
                        label="Password"
                        onChange={handleChange} />
                    <Button
                        className={classes.root}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Login
                    </Button>
                    <Collapse in={open} style={{ width: '95%' }}>
                        <Alert
                            style={{ width: '100%', marginTop: '1rem' }}
                            severity='error'
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            {msg}
                        </Alert>
                    </Collapse>
                </form>
            </div>
            <p className="create-account">Not a member yet? <Link to="/signup">Create an account now</Link>.</p>
        </div>
    )
}

export default LoginForm;