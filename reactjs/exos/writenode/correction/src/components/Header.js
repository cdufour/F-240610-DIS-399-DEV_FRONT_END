import { Link, NavLink } from 'react-router-dom';
import { auth, provider } from '../firebase/config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import logo from '../assets/logo.png';
import './Header.css';

export const Header = () => {

    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false);

    async function onLogin() {
        await signInWithPopup(auth, provider);
        setIsAuth(true);
        localStorage.setItem('isAuth', true);
    }

    function onLogout() {
        signOut(auth);
        setIsAuth(false);
        localStorage.setItem('isAuth', false);
    }

    return (
        <header>
            <Link to="/" className='logo'>
                <img src={logo} alt="logo" />
                <span>WriteNode</span>
            </Link>
            <nav className='nav'>
                <NavLink to="/" className='link'>Home</NavLink>
                { isAuth ? 
                    (<>
                        <NavLink to="/create" className='link'>Create</NavLink>
                        <button onClick={onLogout} className='auth'>
                            <i className='bi bi-box-arrow-right'>Logout</i>
                        </button>
                    </>) :
                    (
                        <button onClick={onLogin} className='auth'>
                            <i className='bi bi-google'>Login</i>
                        </button>
                    )}
            </nav>
        </header>
    )
}