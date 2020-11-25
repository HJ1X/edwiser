import React from 'react';
import './MentorCompanies.css';
import { makeStyles, Grid } from "@material-ui/core";
import accenture from './logos/accenture.png';
import amazon from './logos/amazon.png';
import hp from './logos/hp.jpg';
import ibm from './logos/ibm.png';
import infosys from './logos/infosys.png';
import rockstar from './logos/rockstar.png';
import samsung from './logos/samsung.png';
import tcs from './logos/tcs.png';

const useStyles = makeStyles(theme => ({
    companies: {
        paddingTop: 50,
        marginBottom: 50,
        maxWidth: 1300
    },
    company: {
        padding: '10px 40px',
        marginRight: 30,
        marginBottom: 30
    },
}))

function MentorCompanies() {
    const classes = useStyles();

    return (
        <div className="MentorCompanies">
            <div className="heading">
                <h2>Our Mentors already work in some of the finest companies.</h2>
            </div>
            <Grid container className={classes.companies}>
                <Grid item className={classes.company}><img style={{ maxWidth: 150 }} src={hp} alt='' /></Grid>
                <Grid item className={classes.company}><img style={{ maxWidth: 150 }} src={ibm} alt='' /></Grid>
                <Grid item className={classes.company}><img style={{ maxWidth: 150 }} src={samsung} alt='' /></Grid>
                <Grid item className={classes.company}><img style={{ maxWidth: 150 }} src={tcs} alt='' /></Grid>
                <Grid item className={classes.company}><img style={{ maxWidth: 150 }} src={accenture} alt='' /></Grid>
                <Grid item className={classes.company}><img style={{ maxWidth: 150 }} src={amazon} alt='' /></Grid>
                <Grid item className={classes.company}><img style={{ maxWidth: 150 }} src={infosys} alt='' /></Grid>
                <Grid item className={classes.company}><img style={{ maxWidth: 70 }} src={rockstar} alt='' /></Grid>
            </Grid>
        </div>
    )
}

export default MentorCompanies;