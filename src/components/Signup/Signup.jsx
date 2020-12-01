import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, TextField, makeStyles } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MailIcon from "@material-ui/icons/Mail";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import PhoneIcon from "@material-ui/icons/Phone";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './Signup.css';
import { signup } from "../../utils/form";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
    root: {
        display: 'block',
        marginTop: 20,
        borderRadius: 20
    }
});

const formValues = {};
let id = '';
let msg = '';

function Signup(props) {
    const classes = useStyles();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        ({ id, msg } = await signup.submitForm(formValues));
        setOpen(true);
        if (id) {
            props.setLoginID(id);
            props.setIsLoggedIn('student');
            history.push('/dashboard');
        }
    }

    const handleChange = event => {
        const { id, value } = event.target;
        formValues[id] = value;
    }

    return (
        <div className="Signup">
            <div className="Body">
                <div className="SignupForm">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            InputProps={{ startAdornment: (<PermIdentityIcon style={{ marginRight: 10 }} />) }}
                            required
                            fullWidth={true}
                            size="small"
                            className={classes.root}
                            variant="outlined"
                            id="name"
                            type="text"
                            label="Name"
                            onChange={handleChange}
                        />
                        <TextField
                            InputProps={{ startAdornment: (<AccountBoxIcon style={{ marginRight: 10 }} />) }}
                            required
                            fullWidth={true}
                            size="small"
                            className={classes.root}
                            variant="outlined"
                            id="username"
                            type="text"
                            label="Username"
                            onChange={handleChange}
                        />
                        <div className="info">
                            <TextField
                                style={{ marginRight: 20 }}
                                InputLabelProps={{ shrink: true }}
                                required
                                fullWidth={true}
                                size="small"
                                className={classes.root}
                                variant="outlined"
                                id="dob"
                                type="date"
                                label="Date of Birth"
                                onChange={handleChange}
                            />
                            <TextField
                                InputProps={{ startAdornment: (<MyLocationIcon style={{ marginRight: 10 }} />) }}
                                required
                                fullWidth={true}
                                size="small"
                                className={classes.root}
                                variant="outlined"
                                id="city"
                                type="text"
                                label="City"
                                onChange={handleChange}
                            />
                        </div>
                        <TextField
                            InputProps={{ startAdornment: (<MailIcon style={{ marginRight: 10 }} />) }}
                            required
                            fullWidth={true}
                            size="small"
                            className={classes.root}
                            variant="outlined"
                            id="email"
                            type="email"
                            label="Email"
                            onChange={handleChange}
                        />
                        <TextField
                            InputProps={{ startAdornment: (<PhoneIcon style={{ marginRight: 10 }} />) }}
                            required
                            fullWidth={true}
                            size="small"
                            className={classes.root}
                            variant="outlined"
                            id="mobile"
                            type="tel"
                            label="Mobile Number"
                            onChange={handleChange}
                        />
                        <div className="info">
                            <TextField
                                style={{ marginRight: 20 }}
                                required
                                fullWidth={true}
                                size="small"
                                className={classes.root}
                                variant="outlined"
                                id="password"
                                type="password"
                                label="Password"
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth={true}
                                required
                                size="small"
                                className={classes.root}
                                variant="outlined"
                                id="confirmPassword"
                                type="password"
                                label="Confirm Password"
                                onChange={handleChange}
                            />
                        </div>
                        <Button
                            className={classes.root}
                            variant="contained"
                            color='secondary'
                            type="submit"
                        >
                            Create Account
                        </Button>
                    </form>
                    <p id="mentor-signup" className='login'>Want to be a mentor? <Link to="/login">Click here</Link>.</p>
                    <p className='login'>Already a member? <Link to="/login">Login here</Link>.</p>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    onClose={handleClose}
                    message="I love snacks"
                    key='topcenter'
                    autoHideDuration={6000}
                    style={{ top: 45 }}
                >
                    <Alert onClose={handleClose} severity="error">
                        {msg}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default Signup;