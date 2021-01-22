import React from 'react';
import './Pending.css';
import { Button, makeStyles } from "@material-ui/core";
import { dashboardMentor } from '../../../utils/dashboard';

const useStyles = makeStyles(theme => ({
    list: {
        listStyle: 'none',
    },
    item: {
        boxShadow: '0 5px 15px rgba(0,0,0,0.25), 0 5px 10px rgba(0,0,0,0.22)',
        display: 'flex',
        justifyContent: 'flex-start',
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

function Pending(props) {
    const classes = useStyles();

    const [requests, setRequests] = React.useState([]);
    const [message, setMessage] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await dashboardMentor.requests(props.id);
            if (typeof data === 'string') {
                setMessage(data);
            } else {
                setRequests(data);
            }
        }
        fetchData();
    }, [props.id]);

    const handleAccept = async (studentID, description) => {
        const { msgConnection, msgDeleteRequest } = await dashboardMentor.acceptRequest(studentID, props.id, description);
        console.log(msgConnection, msgDeleteRequest);
        const data = await dashboardMentor.requests(props.id);
        console.log(data);
        if (typeof data === 'string') {
            setMessage(data);
            setRequests([]);
        } else {
            setRequests(data);
        }
    }

    const handleReject = async (studentID, description) => {
        const msgDeleteRequest = await dashboardMentor.rejectRequest(studentID, props.id, description);
        console.log(msgDeleteRequest);
        const data = await dashboardMentor.requests(props.id);
        if (typeof data === 'string') {
            setMessage(data);
            setRequests([]);
        } else {
            setRequests(data);
        }
    }

    const noRequests = () => {
        if (requests.length) return;
        return (
            <div className={classes.item}>
                <h4>{message}</h4>
            </div>
        )
    }

    return (
        <div className="Pending">
            <div className="heading">
                <h2>Students waiting for your response.</h2>
            </div>
            <ul className={classes.list}>
                {
                    requests.map(request => {
                        return (
                            <li key={request._id}>
                                <div className={classes.item}>
                                    <div className={classes.info}>
                                        <h5 style={nameStyle}>{request.name}</h5>
                                        <h6 style={usernameStyle}>{request.username}</h6>
                                        <p className={classes.details}>{request.age}</p>
                                        <p className={classes.details}>{request.email}</p>
                                        <p className={classes.details}>{request.city}</p>
                                        <div className={classes.buttons}>
                                            <Button
                                                variant="contained"
                                                color='primary'
                                                className={classes.button}
                                                style={{ marginRight: '1rem' }}
                                                onClick={() => handleAccept(request._id, request.description)}
                                            >
                                                Accept
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color='secondary'
                                                className={classes.button}
                                                onClick={() => handleReject(request._id, request.description)}
                                            >
                                                Reject
                                            </Button>
                                        </div>
                                    </div>
                                    <p>{request.description}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {noRequests()}
        </div>
    )
}

export default Pending;