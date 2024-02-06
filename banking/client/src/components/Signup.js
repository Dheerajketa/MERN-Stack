import * as React from 'react';
import "../css/Login.css"
import axios from "axios";
import Home from "./Home";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";
export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('username'),
            email: data.get('email'),
            password: data.get('password'),
            aadhar:data.get('aadhar'),
        });

        axios.post('http://localhost:8081/insert', {
            name: data.get('name'),
            role: data.get('role'),
            email: data.get('email'),
            password: data.get('password'),
        }).then((response) => {
            console.log(response.data)
        })

    };

    return (
        <body className="login">
        <Navigation/>
        <div className="glass-container">
            <div className="login-box">
                <h2>Register</h2>
                <form>

                    <input type="text" id="username" name="username" required placeholder="Username"/>

                    <input type="email" id="email" name="email" required placeholder="email"/>

                    <input type="aadhar" id="aadhar" name="aadhar" required placeholder="aadhar"/>

                    <input type="password" id="password" name="password" required placeholder="Password"/>

                    <div className="options">
                        <input type="checkbox" id="terms" name="terms"/>
                        <label htmlFor="terms">I Agree with all terms and conditions.</label>
                    </div>

                    <button type="submit">Register</button>

                    <p>Already have an account?<Link to="/login">Go to Signup</Link></p>
                </form>
            </div>
        </div>
        </body>

    );
}