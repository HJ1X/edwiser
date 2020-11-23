import React from 'react';
import './Header.css';
import logo from './edwiserlogo.webp';

function Header () {
    return (
        <div className="Header">
            <div className='container'>
                <img src={logo} alt="Edwiser Logo"/>
                <nav>
                    <span>On campus</span>
                    <span>Online</span>
                    <span>For companies</span>
                    <span>Sign in</span>
                </nav>
            </div>
        </div>
    )
}

export default Header;