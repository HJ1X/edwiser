import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import logo from './logo.webp';
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} alt="Edwiser logo" />
                </div>
                <div className="content">
                    <div className="links">
                        <div>
                            <Link to=""><InstagramIcon fontSize="large" style={{ color: "white" }} /></Link>
                            <Link to=""><FacebookIcon fontSize="large" style={{ color: "white" }} /></Link>
                            <Link to=""><TwitterIcon fontSize="large" style={{ color: "white" }} /></Link>
                        </div>
                        <div className="legal">
                            <p>Privacy policy | Security | Trademarks</p>
                        </div>
                        <div className="copyright">
                            <p>Copyright &copy; 2000-2020 JetBrains s.r.o.</p>
                            <p>Developed with drive</p>
                        </div>
                    </div>
                    <div className="made">
                        <p>Made with {'\u2764\uFE0F'} in IN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;