import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        // Retrieve the user details from local storage
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Check if the entered details match the stored details
        if (username === storedUsername && password === storedPassword) {
            // Redirect to the dashboard
            history.push('/dashboard');
        } else {
            alert('Invalid username or password');
        }
    };

    const handlePasswordReset = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            localStorage.setItem('password', newPassword);
            alert('Password reset successful!');
            setShowForgotPassword(false);
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div className="form-container">
            {showForgotPassword ? (
                <form onSubmit={handlePasswordReset}>
                    <h2>Reset Password</h2>
                    <div className="form-group">
                        <label>New Password:</label>
                        <input 
                            type="password" 
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Reset Password</button>
                    <button type="button" onClick={() => setShowForgotPassword(false)}>
                        Cancel
                    </button>
                </form>
            ) : (
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label>Username:</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Login</button>
                    <button type="button" onClick={() => setShowForgotPassword(true)}>
                        Forgotten Password
                    </button>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
