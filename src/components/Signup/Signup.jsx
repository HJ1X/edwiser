import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, makeStyles } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MailIcon from "@material-ui/icons/Mail";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import PhoneIcon from "@material-ui/icons/Phone";
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
                            InputProps={{ startAdornment: (<AccountBoxIcon style={{ marginRight: 10 }} />) }}
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
                    <p className='login'>Already a member ? <Link to="/login">Login here</Link>.</p>
                </div>
            </div>
        </div>
    )
}

export default Signup;