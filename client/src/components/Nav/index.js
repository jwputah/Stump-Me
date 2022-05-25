import React from 'react';
import { Link } from "react-router-dom";




function Nav() {

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }

    // const categories = [


    // ];

    return (
        <div class="topnav">
<ul >
    <li>
        <Link to="/newGame">NEWGAME</Link>
    </li>
    <li>
        <Link to="/profile">PROFILE</Link>
    </li>
    <li>
        <Link to="/Home">HOME</Link>
    </li>
</ul>
            




            {/* <a href="#newgame">NEW GAME</a>
            <a href="#friends">FRIENDS</a>
            <a href="#signout">SIGNOUT</a> */}
        </div>
    );
}

export default Nav;