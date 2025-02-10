import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
    return (
        <nav>
            <div className="logo-container">
                <Link to="/">
                    <img src="./bookloverslg1.png" alt="bookLovers" className="logo" />
                </Link>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/most_reads">Most reads</Link></li>
                <li><Link to="/shoppingbooks">Shopping</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/panele">Panele</Link></li>
            </ul>
            <div className="main-route-place">
                <Routes>
                    
                </Routes>
            </div>
        </nav>
    );
}
