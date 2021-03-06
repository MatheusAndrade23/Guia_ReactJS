import { useState } from 'react';

import logo from "../../images/logo192.png";

function Header(){

    const [ toggle, setToggle ] = useState(false);

    const toggleMenu = () => {

        setToggle(!toggle);
    };

    return(
        <header className={ toggle ? 'active' : null}>
            <a href='/'>
                <img src={logo} alt="logo_react"/>
                <p>Guia ReactJS</p>
            </a>
            <ul id='menu'>
                <li><a href='/intro'>Introdução</a></li>
                <li><a href='/hooks'>React Hooks</a></li>
                <li><a href='/js'>JavaScript</a></li>
                <li><a href='https://github.com/MatheusAndrade23/Guia_ReactJS'>GitHub</a></li>
            </ul>
            <button onClick={toggleMenu}>Menu
                <span id='hamburguer'></span>
            </button>
        </header>
    )
};

export default Header;