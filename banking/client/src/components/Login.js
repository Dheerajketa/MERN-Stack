import React from 'react';
import "../css/Login.css";
import { Link } from 'react-router-dom';
import Navigation from "./Navigation";
import axios from "axios";

function Login() {

    function handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        console.log({
            un: document.getElementById("username").value,
            ps: document.getElementById("password").value,
        });

        axios.post('http://localhost:8081/check', {
            un: document.getElementById("username").value,
            ps: document.getElementById("password").value
        }).then((response) => {
            console.log(response.data);
        });
    }

    return (
        <div>
            <body className="login">
            <Navigation />
            <div className="glass-container">
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>

                        <input type="text" id="username" name="username" required placeholder="Username" />

                        <input type="password" id="password" name="password" required placeholder="Password" />

                        <div className="options">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember">Remember me</label>
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="submit">Login</button>

                        <p>Don't have an account?<Link to="/Register">Go to Signup</Link></p>
                    </form>
                </div>
            </div>
            </body>
        </div>
    );
}

export default Login;
