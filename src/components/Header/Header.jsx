import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './edwiserlogo.webp';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AppBar, Toolbar, IconButton, Grid, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    logoStyles: {
        maxWidth: '10rem',
        maxHeight: '4rem',
        paddingTop: '0.5rem'
    },
    appbarStyles: {
        backgroundColor: 'rgb(61, 61, 68)'
    },
    navbarTextStyles: {
        paddingRight: 20,
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'none',
            fontWeight: 600
        }
    }
}))

function Header() {
    const classes = useStyles();
    return (
        <AppBar className={classes.appbarStyles} color='secondary' position='sticky' elevation={1}>
            <Toolbar>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item>
                        <img className={classes.logoStyles} src={logo} alt='Edwiser Logo' />
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' justify='space-between' alignItems='center'>
                            <Link to="/" className={classes.navbarTextStyles}>Home</Link>
                            <Link to="/about" className={classes.navbarTextStyles}>About</Link>
                            <IconButton>
                                <Link to='/login'><AccountCircleIcon style={{ color: 'white' }} /></Link>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
