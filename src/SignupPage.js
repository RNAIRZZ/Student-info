// SignupPage.js
import React, { useState } from 'react';
import './SignupPage.css'; // Make sure to import your CSS file

const SignupPage = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup({ username, email }); 
    };

    return (
        <div className="signup-page"> {/* Apply the signup-page class here */}
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupPage; // Ensure this is present
