import React from 'react';
import './Header.css';

function Header () {
    return (
        <div className='container'>
            <h1>Logo</h1>
            <nav>
                <span>On campus</span>
                <span>Online</span>
                <span>For companies</span>
                <span>Sign in</span>
            </nav>
        </div>
    )
}

export default Header;