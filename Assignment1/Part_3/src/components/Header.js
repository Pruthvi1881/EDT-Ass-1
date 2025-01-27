import React from 'react';
import '../styles/Header.css';  // Import Header styles

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>My Portfolio</h1>
                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
