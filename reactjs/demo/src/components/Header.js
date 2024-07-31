import React from 'react'
import logo from '../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="" />
            <a href="/">Accueil</a>
        </header>
    )
}

export default Header