import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './edwiserlogo.webp';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { AppBar, Toolbar, IconButton, Grid, makeStyles } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core"

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
        marginRight: 20,
        color: 'white',
        textDecoration: 'none',
        paddingBottom: 2,
        borderBottom: '1px rgb(61, 61, 68) solid',
        transition: 'all .2s ease-in',
        '&:hover': {
            textDecoration: 'none',
            cursor: 'pointer',
            borderColor: 'white',
        }
    }
}))

function Header(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const setDashboard = () => {
        if (props.isLoggedIn === 'mentor') {
            return '/dashboard-mentor';
        } else if (props.isLoggedIn === 'student') {
            return '/dashboard';
        } else {
            return '/login';
        }
    }

    return (
        <AppBar className={classes.appbarStyles} color='secondary' position='sticky' elevation={1}>
            <Toolbar>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                    <Grid item>
                        <Link to="/"><img className={classes.logoStyles} src={logo} alt='Edwiser Logo' /></Link>
                    </Grid>
                    <Grid item>
                        <Grid container direction='row' justify='space-between' alignItems='center'>
                            <Link to="/" className={classes.navbarTextStyles}>Home</Link>
                            <Link to={setDashboard()} className={classes.navbarTextStyles}>Dashboard</Link>
                            <Link to="/solutions" className={classes.navbarTextStyles}>Solutions</Link>
                            <Link to="/about" className={classes.navbarTextStyles}>About Us</Link>
                            <IconButton onClick={handleClick}>
                                <AccountCircleIcon style={{ color: 'white' }} />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {props.isLoggedIn && <Link style={{ textDecoration: 'none', color: 'black' }} to="/dashboard"><MenuItem onClick={handleClose}>Dashboard</MenuItem></Link>}
                                {props.isLoggedIn && <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><MenuItem onClick={() => { props.setIsLoggedIn(false); handleClose(); }}>Log Out</MenuItem></Link>}
                                {!props.isLoggedIn && <Link style={{ textDecoration: 'none', color: 'black' }} to="/login"><MenuItem onClick={handleClose}>Log In</MenuItem></Link>}
                                {!props.isLoggedIn && <Link style={{ textDecoration: 'none', color: 'black' }} to="/signup"><MenuItem onClick={handleClose}>Create Account</MenuItem></Link>}
                            </Menu>
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
