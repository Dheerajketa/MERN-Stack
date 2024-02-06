import React from 'react';
import Navigation from "./Navigation";
import Login from "./Login";
import "../css/Home.css"
import s1 from "../images/services/service-5.jpg"
function Home() {
    return (

        <>
            <Navigation/>
            <Login/>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <body>

            <footer className="bottom">
                <p>&copy; 2024 Your Website Name. All rights reserved.</p>
            </footer>
            </body>
        </>

    );
}

export default Home;