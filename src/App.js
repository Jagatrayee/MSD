import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Ensure proper imports
import Tasks from './Tasks'; // If you want to use Tasks component in App.j

import Login from './Login';   // Importing Login component
import Register from './Register';  // Importing Register component
import Home from './Home';  // Importing Home component
import './styles.css';  // Importing styles

function App() {
    return (
        <Router> {/* Ensure Router wraps the entire app */}
            <Routes>
                {/* Define the routes */}
                <Route path="/" element={<Home />} />  {/* For the Home page */}
                <Route path="/tasks" element={<Tasks/>} />  {/* For the Tasks page */}
                <Route path="/login" element={<Login />} />  {/* For login */}
                <Route path="/register" element={<Register />} />  {/* For registration */}
            </Routes>
        </Router>
    );
}

export default App;
