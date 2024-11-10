import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="white">
                    <path d="..."/>
                </svg>
                Task Manager
            </h1>
            <nav>
                <Link to="/">🏠 Home</Link>
                <Link to="/tasks">📝 Tasks</Link>
                <Link to="/login">🔑 Login</Link>
                <Link className="space" to="/register">🆕 Register</Link>
            </nav>
        </header>
    );
}

export default Header;
