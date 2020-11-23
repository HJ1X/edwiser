import React from 'react';
import './Footer.css';

function Footer () {
    return (
        <div className='Footer'>
            <div class="container">
                <span class="copyright">&copy; 2016 Colmar Academy. All rights reserved</span>
                <span class="privacy-terms">
                    <p href="#">Terms</p>
                    <p href="#">Privacy</p>
                </span>
            </div>
        </div>
    )
}

export default Footer;