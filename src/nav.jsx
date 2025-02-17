import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faStore, faCartShopping, faBookOpen, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    const [searchQuery, setSearchQuery] = useState(""); 
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            navigate(`/search?q=${searchQuery}`);
        }
    };

    return (
        <nav>
            <div className="logo-container">
                <Link to="/">
                    <img src="./bookloverslg1.png" alt="bookLovers" className="logo" />
                </Link>
            </div>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>

            <ul>
                <li><Link to="/"><FontAwesomeIcon icon={faHouse} /></Link></li>
                <li><Link to="/most_reads"><FontAwesomeIcon icon={faBookOpen} /></Link></li>
                <li><Link to="/shoppingbooks"><FontAwesomeIcon icon={faStore} /></Link></li>
                <li><Link to="/panele"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
                <li><Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link></li>
            </ul>
        </nav>
    );
}
