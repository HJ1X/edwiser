import React from 'react';
import './NewMentors.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Button, Card, CardActions, CardContent, makeStyles } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextareaAutosize } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { dashboardStudent } from '../../../utils/dashboard';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const useStyles = makeStyles(theme => ({
    card: {
        margin: '0 1rem'
    },
    button: {

    },
    CardAction: {
        display: 'flex',
        justifyContent: 'center'
    }
}))


function NewMentors(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [newMentors, setNewMentors] = React.useState([]);
    const [currentField, setCurrentField] = React.useState('web-dev');
    const [selectedMentor, setSelectedMentor] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [msg, setMsg] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await dashboardStudent.newMentors(props.id);
            if (typeof data === 'string') {
                console.log(data);
            } else {
                setNewMentors(data.mentors);
                setCurrentField(data.field);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async () => {
        const data = await dashboardStudent.addRequest(props.id, selectedMentor, description);
        setStatus(data.status);
        setMsg(data.msg);
        setDescription('');
    }

    const handleDescription = (event) => setDescription(event.target.value);


    const handleClickOpen = (mentorID) => {
        setSelectedMentor(mentorID);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const handleClickOpenSnackBar = () => setOpenSnackBar(true);
    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    };

    return (
        <div className="NewMentors">
            <div className="content">
                <div className="info">
                    <div className="heading">
                        <h2>Still stuck?</h2>
                    </div>
                    <h3>Checkout some other mentors from {currentField}</h3>
                    <p>Its okay if to not Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores eaque fugiat illo animi fugit officiis beatae doloremque minima soluta.</p>
                </div>
                <div className="carousel">
                    <Carousel
                        className={newMentors.length < 3 ? "carousel-in2" : "carousel-in"}
                        arrows={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        keyBoardControl={true}
                        customTransition="all 1s linear"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["mobile"]}
                        renderButtonGroupOutside={false}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    /*customButtonGroup={<ButtonGroup
                        next={props.next}
                        previous={props.previous}
                        rest={props.rest}
                    />}*/
                    >
                        {
                            newMentors.map(mentor => {
                                return (
                                    <Card className={classes.card}>
                                        <CardContent className={classes.CardContent}>
                                            <div className="name">
                                                <h5>{mentor.fname}</h5>
                                                {console.log(mentor.fname)}
                                                <h5>{mentor.lname}</h5>
                                            </div>
                                            <p>{mentor.companies}</p>
                                            <p>{mentor.experience}</p>
                                            <p>{mentor.city}</p>
                                        </CardContent>
                                        <CardActions className={classes.CardAction}>
                                            <Button className={classes.button} variant="contained" color="primary" onClick={() => handleClickOpen(mentor._id)}>Connect</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    </Carousel>
                    <Dialog open={open} onClose={handleClose} aria-labelledby="description">
                        <DialogTitle id="description">Description</DialogTitle>
                        <DialogContent>
                            <DialogContentText style={{ marginBottom: 30 }}>
                                Write a brief message describing you and your approach to the career. Also Write
                                your expectations from the mentor to help them better guide you.
                            </DialogContentText>
                            <TextareaAutosize
                                style={{
                                    width: '100%',
                                    borderRadius: '5px',
                                    padding: 10,
                                    boxSizing: 'border-box'
                                }}
                                aria-label="description"
                                rowsMin={8}
                                placeholder="Write your message here..."
                                value={description}
                                onChange={handleDescription}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button style={{ margin: '0 15px 10px 0' }} variant="contained" onClick={() => { handleSubmit(); handleClose(); handleClickOpenSnackBar(); }} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                        <Alert onClose={handleCloseSnackBar} severity={status}>
                            {msg}
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    )
}

// const ButtonGroup = ({ next, previous, ...rest }) => {
//     const {
//         carouselState: { currentSlide, totalItems, slidesToShow }
//     } = rest;

//     return (
//         <div className="carousel-button-group">
//             <button aria-label="Go to previous slide"
//                 className={currentSlide === 0 ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"}
//                 onClick={() => previous()}></button>
//             <button aria-label="Go to next slide"
//                 className={currentSlide === totalItems - slidesToShow ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"}
//                 onClick={() => next()}></button>
//         </div>
//     );
// };

export default NewMentors;