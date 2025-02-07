import { NavLink } from 'react-router';
import './style.css';

const Nav = () => (
    <nav className='nav'>
        <ul>
            <li>
                <NavLink to='/'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/about'>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to='/menu'>
                    Menu
                </NavLink>
            </li>
            <li>
                <NavLink to='/booking'>
                    Reservations
                </NavLink>
            </li>
            <li>
                <NavLink to='/order'>
                    Order Online
                </NavLink>
            </li>
            <li>
                <NavLink to='/login'>
                    Login
                </NavLink>
            </li>
        </ul>
    </nav>
);

export { Nav };