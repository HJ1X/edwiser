import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Button, TextField, makeStyles } from "@material-ui/core";
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
                        <TextField fullWidth={true} size="small" className={classes.root} variant="outlined" name="username" type="text" label="Username" />
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