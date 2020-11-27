import React from 'react';
import './NewMentors.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Button, Card, CardActions, CardContent, makeStyles } from '@material-ui/core';

const newMentors = [{
    fname: 'Himanshu',
    lname: 'Jaroli',
    companies: 'Amazon, TCS, IBM',
    experience: '4 years',
    city: 'udaipur'
}, {
    fname: 'Ruthvik',
    lname: 'Gudlavalleti',
    companies: 'Amazon, Google, IBM',
    experience: '8 years',
    city: 'Pune'
}, {
    fname: 'Moid',
    lname: 'Kaywadla',
    companies: 'Google, Apple, HP',
    experience: '4 years',
    city: 'Dahod'
}, {
    fname: 'Pandy',
    lname: 'abhi',
    companies: 'Amazon, TCS, IBM',
    experience: '4 years',
    city: 'udaipur'
}, {
    fname: 'Ankit',
    lname: 'yoi',
    companies: 'Amazon, TCS, IBM',
    experience: '4 years',
    city: 'udaipur'
}]

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

    return (
        <div className="NewMentors">
            <div className="content">
                <div className="info">
                    <div className="heading">
                        <h2>Still stuck?</h2>
                    </div>
                    <h3>Checkout some other mentors from {'Web Development'}</h3>
                    <p>Its okay if to not Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque asperiores eaque fugiat illo animi fugit officiis beatae doloremque minima soluta.</p>
                </div>
                <div className="carousel">
                    <Carousel
                        className="carousel-in"
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
                                                <h5>{mentor.lname}</h5>
                                            </div>
                                            <p>{mentor.companies}</p>
                                            <p>{mentor.experience}</p>
                                            <p>{mentor.city}</p>
                                        </CardContent>
                                        <CardActions className={classes.CardAction}>
                                            <Button className={classes.button} variant="contained" color="primary">Connect</Button>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
        carouselState: { currentSlide, totalItems, slidesToShow }
    } = rest;

    return (
        <div className="carousel-button-group">
            <button aria-label="Go to previous slide"
                className={currentSlide === 0 ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"}
                onClick={() => previous()}></button>
            <button aria-label="Go to next slide"
                className={currentSlide === totalItems - slidesToShow ? "disable" : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"}
                onClick={() => next()}></button>
        </div>
    );
};

export default NewMentors;