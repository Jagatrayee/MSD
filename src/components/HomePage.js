import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const HomePage = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to login form

  return (
    <div>
      <h1>Welcome to the Task Management App</h1>
      <button onClick={() => setIsLogin(true)}>Login</button>
      <button onClick={() => setIsLogin(false)}>Register</button>

      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default HomePage;
