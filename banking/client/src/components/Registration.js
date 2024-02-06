import React, { useState } from 'react';
import "../css/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();  // Use useNavigate instead of useHistory

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        aadhar: '',
        password: '',
        terms: false,
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.terms) {
            try {
                // Use your actual API endpoint for user registration
                const response = await axios.post('http://localhost:8081/insert', {
                    username: formData.username,
                    email: formData.email,
                    aadhar: formData.aadhar,
                    password: formData.password,
                    // Add other fields as needed
                });

                // Log the server response
                console.log('Server Response:', response.data);

                // Add your logic for handling the response (e.g., redirecting user)
                // Example: navigate('/login');
                navigate('/login');
            } catch (error) {
                console.error('Error during registration:', error.message);
                // Handle the error (e.g., display an error message to the user)
            }
        } else {
            setErrorMessage('You should agree to the terms and conditions.');
        }
    };

    return (
        <body className="login">
        <Navigation />
        <div className="glass-container">
            <div className="login-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="aadhar"
                        id="aadhar"
                        name="aadhar"
                        required
                        placeholder="Aadhar"
                        value={formData.aadhar}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <div className="options">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                        />
                        <label htmlFor="terms">I Agree with all terms and conditions.</label>
                    </div>

                    <button type="submit" disabled={!formData.terms}>
                        Register
                    </button>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <p>Already have an account?<Link to="/login">Go to Signup</Link></p>
                </form>
            </div>
        </div>
        </body>
    );
}
