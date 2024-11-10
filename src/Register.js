// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState(false);
//     const [successMessage, setSuccessMessage] = useState(false);
    
//     const navigate = useNavigate(); // Initialize the useNavigate hook for navigation

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         // Input validation for email
//         if (!email.endsWith('@gmail.com')) {
//             setErrorMessage(true);
//             return;
//         } else {
//             setErrorMessage(false);
//         }

//         // Send registration data to backend
//         fetch('/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, email, password }),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data.message === 'Registration successful! 🎉') {
//                     setSuccessMessage(true);
//                     setTimeout(() => {
//                         // Use navigate instead of window.location.href
//                         navigate('/register');
//                     }, 3000);
//                 } else {
//                     alert(data.message);
//                 }
//             })
//             .catch((error) => console.error('Error:', error));
//     };

//     return (
//         <div>
//             <header>
//                 <h1>
//                     <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="white">
//                         <path d="M480-80q-84.33 0-157.33-30.83-73-30.84-127-84.84t-84.84-127Q80-395.67 80-480q0-83.67 30.83-156.67 30.84-73 84.84-127t127-85.16Q395.67-880 480-880q71.67 0 134.33 22.33Q677-835.33 728-796l-48 48.33q-42-31.33-92.33-48.5-50.34-17.16-107.67-17.16-141 0-237.17 96.16Q146.67-621 146.67-480t96.16 237.17Q339-146.67 480-146.67q35.33 0 68.33-6.66Q581.33-160 612-173l50 51q-41 20-86.67 31Q529.67-80 480-80Zm286.67-86.67v-120h-120v-66.66h120v-120h66.66v120h120v66.66h-120v120h-66.66ZM422-297.33 255.33-464.67 304-513.33l118 118L831.33-805l49.34 48.67-458.67 459Z" />
//                     </svg>
//                     Task Manager
//                 </h1>
//                 <nav>
//                     <a href="index">🏠 Home</a>
//                     <a href="tasks">📝 Tasks</a>
//                     <a href="login">🔑 Login</a>
//                     <a className="space" href="register">🆕 Register</a>
//                 </nav>
//             </header>

//             <main className="centered">
//                 <div className="box">
//                     <h2>Create an Account</h2>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">Username:</label>
//                         <input
//                             type="text"
//                             id="username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                             placeholder="✨ Enter your username"
//                         />
//                         <label htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             required
//                             placeholder="✨ Enter your email"
//                         />
//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                             placeholder="🔒 Enter your password"
//                         />
//                         <button type="submit">Register</button>
//                     </form>
//                     {errorMessage && (
//                         <div style={{ color: 'red' }}>🚫 Please enter a valid Gmail address!</div>
//                     )}
//                     {successMessage && (
//                         <div style={{ marginTop: '30px', color: 'green', fontWeight: 'bold' }}>
//                             🎉 Registration successful! You can now log in! 🌟
//                         </div>
//                     )}
//                 </div>
//             </main>

//             <footer>
//                 <p>&copy; 2024 Task Management App - Stay organized! 🌈</p>
//             </footer>
//         </div>
//     );
// };

// export default Register;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    const navigate = useNavigate(); // Initialize the useNavigate hook for navigation

    const handleSubmit = (event) => {
        event.preventDefault();

        // Input validation for email
        if (!email.endsWith('@gmail.com')) {
            setErrorMessage(true);
            return;
        } else {
            setErrorMessage(false);
        }

        // Send registration data to backend
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);  // Log the response to check if it's as expected
                if (data.message === 'Registration successful! 🎉') {
                    setSuccessMessage(true);  // Trigger success message
                    setTimeout(() => {
                        // Redirect to login page after 3 seconds
                        navigate('/login');
                    }, 3000);
                } else {
                    alert(data.message);  // Show error message if registration fails
                }
            })
            .catch((error) => console.error('Error:', error));  // Log any fetch errors
    };

    return (
        <div>
            <header>
                <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="40px" fill="white">
                        <path d="M480-80q-84.33 0-157.33-30.83-73-30.84-127-84.84t-84.84-127Q80-395.67 80-480q0-83.67 30.83-156.67 30.84-73 84.84-127t127-85.16Q395.67-880 480-880q71.67 0 134.33 22.33Q677-835.33 728-796l-48 48.33q-42-31.33-92.33-48.5-50.34-17.16-107.67-17.16-141 0-237.17 96.16Q146.67-621 146.67-480t96.16 237.17Q339-146.67 480-146.67q35.33 0 68.33-6.66Q581.33-160 612-173l50 51q-41 20-86.67 31Q529.67-80 480-80Zm286.67-86.67v-120h-120v-66.66h120v-120h66.66v120h120v66.66h-120v120h-66.66ZM422-297.33 255.33-464.67 304-513.33l118 118L831.33-805l49.34 48.67-458.67 459Z" />
                    </svg>
                    Task Manager
                </h1>
                <nav>
                    <a href="/">🏠 Home</a>
                    <a href="tasks">📝 Tasks</a>
                    <a href="login">🔑 Login</a>
                    <a className="space" href="register">🆕 Register</a>
                </nav>
            </header>

            <main className="centered">
                <div className="box">
                    <h2>Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="✨ Enter your username"
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="✨ Enter your email"
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="🔒 Enter your password"
                        />
                        <button type="submit">Register</button>
                    </form>
                    {errorMessage && (
                        <div style={{ color: 'red' }}>🚫 Please enter a valid Gmail address!</div>
                    )}
                    {successMessage && (
                        <div style={{ marginTop: '30px', color: 'green', fontWeight: 'bold' }}>
                            🎉 Registration successful! You can now log in! 🌟
                        </div>
                    )}
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Task Management App - Stay organized! 🌈</p>
            </footer>
        </div>
    );
};

export default Register;
