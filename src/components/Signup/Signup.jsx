import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, makeStyles } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MailIcon from "@material-ui/icons/Mail";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import PhoneIcon from "@material-ui/icons/Phone";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import './Signup.css';

const useStyles = makeStyles({
    root: {
        display: 'block',
        marginTop: 20,
        borderRadius: 20
    }
})

function Signup() {
    const classes = useStyles();

    return (
        <div className="Signup">
            <div className="Body">
                <div className="SignupForm">
                    <form action="" method="post">
                        <TextField
                            InputProps={{ startAdornment: (<PermIdentityIcon style={{ marginRight: 10 }} />) }}
                            required
                            fullWidth={true}
                            size="small"
                            className={classes.root}
                            variant="outlined"
                            name="name"
                            type="text"
                            label="Name"
                        />
                        <TextField
                            InputProps={{ startAdornment: (<AccountBoxIcon style={{ marginRight: 10 }} />) }}
                            required
                            fullWidth={true}
                            size="small"
                            className={classes.root}
                            variant="outlined"
                            name="name"
                            type="text"
                            label="Username"
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
                                name="dob"
                                type="date"
                                label="Date of Birth"
                            />
                            <TextField
                                InputProps={{ startAdornment: (<MyLocationIcon style={{ marginRight: 10 }} />) }}
                                required
                                fullWidth={true}
                                size="small"
                                className={classes.root}
                                variant="outlined"
                                name="city"
                                type="text"
                                label="City"
                            />
                        </div>
                        <TextField
                            InputProps={{ startAdornment: (<MailIcon style={{ marginRight: 10 }} />) }}
                            required
                            fullWidth={true}
                            size="small"
                            className={classes.root}
                            variant="outlined"
                            name="email"
                            type="email"
                            label="Email"
                        />
                        <TextField
                            InputProps={{ startAdornment: (<PhoneIcon style={{ marginRight: 10 }} />) }}
                            required
                            fullWidth={true}
                            size="small"
                            className={classes.root}
                            variant="outlined"
                            name="mobileNo"
                            type="tel"
                            label="Mobile Number"
                        />
                        <div className="info">
                            <TextField
                                style={{ marginRight: 20 }}
                                required
                                fullWidth={true}
                                size="small"
                                className={classes.root}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Password"
                            />
                            <TextField
                                fullWidth={true}
                                required
                                size="small"
                                className={classes.root}
                                variant="outlined"
                                name="confirm-password"
                                type="password"
                                label="Confirm Password"
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
            </div>
        </div>
    )
}

export default Signup;