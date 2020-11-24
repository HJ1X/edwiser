import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button, TextField, makeStyles } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
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
            <Header />
            <div className="Body">
                <div className="SignupForm">
                    <form action="" method="post">
                        <TextField InputProps={{ startAdornment: (<AccountCircleIcon style={{marginRight: 10}} />) }} fullWidth={true} size="small" className={classes.root} variant="outlined" name="name" type="text" label="Username" />
                        <TextField fullWidth={true} size="small" className={classes.root} variant="outlined" name="dob" type="date" label="Date of Birth" InputLabelProps={{ shrink: true }} />
                        <TextField InputProps={{ startAdornment: (<MyLocationIcon style={{ marginRight: 10 }} />) }} fullWidth={true} size="small" className={classes.root} variant="outlined" name="city" type="text" label="City" />
                        <TextField InputProps={{ startAdornment: (<MailIcon style={{ marginRight: 10 }} />) }} fullWidth={true} size="small" className={classes.root} variant="outlined" name="email" type="email" label="Email" />
                        <TextField InputProps={{ startAdornment: (<PhoneIcon style={{ marginRight: 10 }} />) }} fullWidth={true} size="small" className={classes.root} variant="outlined" name="mobileNo" type="tel" label="Mobile Number" />
                        <TextField fullWidth={true} size="small" className={classes.root} variant="outlined" name="password" type="password" label="Password" />
                        <TextField fullWidth={true} size="small" className={classes.root} variant="outlined" name="confirm-password" type="password" label="Confirm Password" />
                        <Button className={classes.root} variant="contained" >Create Account</Button>
                    </form>
                    <p className='login'>Already a member ? <Link to="/login">Login here</Link>.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup;