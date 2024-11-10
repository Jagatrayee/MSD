import React from 'react';
import Header from './Header';

function Home() {
    return (
        <div>
            <Header />
            <main>
                <div className="home-box">
                    <h2 style={{ fontSize: '40px' }}>Welcome to the Task Manager App!</h2>
                    <p style={{ fontSize: '20px' }}>Manage your tasks efficiently with ease!</p>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Task Management App - Stay organized! 🌈</p>
            </footer>
        </div>
    );
}

export default Home;
