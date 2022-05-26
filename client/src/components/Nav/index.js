import React from 'react';
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

// function Nav() {

const Nav = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }

    // const categories = [


    // ];

    return (
        <div class="topnav">
            <div>
                <ul >
                    <li>
                        <Link to="/Riddle">NEWGAME</Link>
                    </li>
                    <li>
                        <Link to="/profile">PROFILE</Link>
                    </li>
                    <li>
                        <Link to="/Home">HOME</Link>
                    </li>
                    {Auth.loggedIn() ? (
                    <li>
                        <Link to="/profile">ME</Link>
                        <a href="/" onClick={logout}>
                            LOGOUT
                        </a>
                    </li>
                ) : (
                    <li>
                        <Link to="/login">LOGIN</Link>
                        <Link to="/signup">SIGNUP</Link>
                    </li>
                )}
                </ul>
            </div>

            <div>
                <h1 className='navTitle'>
                    STUMP ME
                </h1>
            </div>
            {/* <a href="#newgame">NEW GAME</a>
            <a href="#friends">FRIENDS</a>
            <a href="#signout">SIGNOUT</a> */}
        </div>
    );
}

export default Nav;