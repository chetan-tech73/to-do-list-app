import React from 'react';
import { link } from 'react-router-dom';

function Header(){
    return(
        <Header>
            <nav>
                <ul>
                    <li>
                        <link to='/signin'>Sign In</link>
                    </li>
                    <li>
                        <link to='/signup'>Sign Up</link>
                    </li>
                </ul>
            </nav>
        </Header>
    );
}

export default Header;