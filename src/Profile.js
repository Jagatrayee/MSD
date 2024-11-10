import React, { useEffect, useState } from 'react';
import Header from './Header';

function Profile() {
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        setUserEmail(localStorage.getItem('userEmail'));
    }, []);

    return (
        <div>
            <Header />
            <main className="centered">
                <div className="box">
                    <h2>Welcome, {userEmail || 'Tasks'}! 🎉</h2>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Task Management App - Stay organized! 🌈</p>
            </footer>
        </div>
    );
}

export default Profile;
