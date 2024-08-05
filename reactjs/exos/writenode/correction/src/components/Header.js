import { Link, NavLink } from 'react-router-dom';
import { auth, provider } from '../firebase/config';
import { signInWithPopup, signOut } from 'firebase/auth';

import logo from '../assets/logo.png';

export const Header = ({isAuth, setIsAuth}) => {
    
    async function onLogin() {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
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