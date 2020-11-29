import React from 'react';
import './Pending.css';
import { Button, makeStyles } from "@material-ui/core";

const mentors = [{
    id: 1,
    name: 'Himanshu Jaroli',
    username: 'HJ1X',
    city: 'Udaipur',
    age: 20,
    email: 'hj@blabla.com',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis adipisci atque tenetur odio sint debitis itaque, quisquam, ea placeat a sit dolorem dignissimos amet corporis maiores recusandae voluptate exercitationem. Quidem minus quaerat aspernatur reprehenderit accusamus neque earum necessitatibus, aliquid saepe.'
}, {
    id: 2,
    name: 'Ruthvik Gudlavelleti',
    username: 'RyanBlaze',
    city: 'Pune',
    age: 25,
    email: 'ruthvilrokz@bvucoep.edu.in',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste enim, mollitia ullam vitae, ea dignissimos vel unde cupiditate recusandae debitis repellat quisquam minus ipsam veritatis labore distinctio quasi iusto placeat ut in. Vel necessitatibus cupiditate dolor maiores tempore. Impedit fuga ab beatae harum reiciendis. Nesciunt totam sit eaque eum! Quaerat dolores officia consequuntur! Omnis, dolore nulla nisi quisquam eius voluptatibus amet fuga aliquid atque animi distinctio doloremque at eos voluptates! Et nemo explicabo animi perferendis quisquam nobis ex, nihil veritatis debitis qui veniam reiciendis quibusdam molestiae aperiam id, voluptate alias voluptatibus dolores laudantium labore accusantium! Non, nisi. Fugiat, quidem dolore.'
}]

const useStyles = makeStyles(theme => ({
    list: {
        listStyle: 'none',
    },
    item: {
        boxShadow: '0 5px 15px rgba(0,0,0,0.25), 0 5px 10px rgba(0,0,0,0.22)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        margin: '20px 50px 20px 0px'
    },
    info: {
        minWidth: 350,
    },
    details: {
        margin: 0
    },
    buttons: {
        paddingTop: '2.5rem',
        paddingBottom: '1rem'
    }
}))

const nameStyle = {
    fontSize: '1.8rem',
    margin: '10px 0 0 0'
}

const usernameStyle = {
    fontSize: '1.2rem',
    lineHeight: '1rem',
    opacity: 0.5,
    margin: '0 0 2rem 0'
}

function Pending() {
    const classes = useStyles();

    return (
        <div className="Pending">
            <div className="heading">
                <h2>Students waiting for your response.</h2>
            </div>
            <ul className={classes.list}>
                {
                    mentors.map(mentor => {
                        return (
                            <li key={mentor.id}>
                                <div className={classes.item}>
                                    <div className={classes.info}>
                                        <h5 style={nameStyle}>{mentor.name}</h5>
                                        <h6 style={usernameStyle}>{mentor.username}</h6>
                                        <p className={classes.details}>{mentor.age}</p>
                                        <p className={classes.details}>{mentor.email}</p>
                                        <p className={classes.details}>{mentor.city}</p>
                                        <div className={classes.buttons}>
                                            <Button variant="contained" color='primary' className={classes.button} style={{ marginRight: '1rem' }}>Accept</Button>
                                            <Button variant="contained" color='secondary' className={classes.button}>Reject</Button>
                                        </div>
                                    </div>
                                    <p>{mentor.description}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Pending;