import React from 'react';
import logo from './img/logo192.png';


export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" />
            <h2>This is Header component</h2>
        </div>
    )
}
