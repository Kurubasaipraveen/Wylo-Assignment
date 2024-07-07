import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store the user details in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        // Redirect to login page
        history.push('/login');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>RegisterForm</h1>
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
            <button type="submit" >Register</button>
        </form>
    );
};

export default RegisterForm;
