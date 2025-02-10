import React from "react";
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./home";
import AboutPage from "./about";
export default function App () {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div className="main-route-place">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </div>
        )
}