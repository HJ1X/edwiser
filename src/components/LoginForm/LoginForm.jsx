import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Button, TextField, makeStyles } from "@material-ui/core";
import './LoginForm.css';
import TabNav from '../TabNav/TabNav';

const useStyles = makeStyles({
    root: {
        display: 'block',
        marginTop: 20,
        borderRadius: 20
    }
})

const textFieldStyles = {
    padding: 100
}

function LoginForm() {
    const [selected, setSelected] = useState('student');
    const classes = useStyles();

    return (
        <div className="LoginForm">
            <TabNav setSelected={setSelected} />
            <h1>{selected.replace(/^\w/, (c) => c.toUpperCase())} Login</h1>
            <div className="Form">
                <form action="" method="post">
                    <TextField fullWidth={true} size="small" className={classes.root} variant="outlined" name="username" type="text" label="Username" />
                    <TextField fullWidth={true} size="small" className={classes.root} variant="outlined" name="password" type="password" label="Password" />
                    <Button className={classes.root} variant="contained" color="primary" >Login</Button>
                </form>
            </div>
            <p className="create-account">Not a member yet? <Link to="/signup">Create an account now</Link>.</p>
        </div>
    )
}

export default LoginForm;