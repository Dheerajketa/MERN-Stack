import React from 'react';
import "../css/navbar.css"
import logo from "../images/Project logo.png"
import {NavLink} from "react-router-dom";
function Home() {
    return (
        <>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <div>

                <body className="home">
                <section>
                    <header className="head">
                        <div className="logo-container">
                            <img src={logo} alt="Logo" className="logo"/>
                        </div>

                        <nav>
                            <ul className="nav__links">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </nav>
                        <NavLink className="cta" id='login' to="/login">Login</NavLink>
                        <NavLink className="cta" id='register' to="/register">Register</NavLink>
                    </header>
                    <div className="overlay">
                        <a className="close">&times;</a>
                        <div className="overlay__content">
                            <a href="#">Services</a>
                            <a href="#">Projects</a>
                            <a href="#">About</a>
                        </div>
                    </div>
                </section>
                </body>

            </div>
        </>

    );
}

export default Home;