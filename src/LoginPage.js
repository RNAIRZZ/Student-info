import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage({ onLogin, onSwitchToSignup }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, validate the login credentials here
        const userData = { username }; 
        onLogin(userData); 
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? 
                <button onClick={onSwitchToSignup}>Sign Up</button>
            </p>
        </div>
    );
}

export default LoginPage;
