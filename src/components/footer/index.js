import './style.css';
import { NavLink } from 'react-router';

const Footer = () => (
    <footer className='section-background-container'>
        <div className='section-background'/>
        <div className='footer-content section-container'>
            <img src='/img/mario-and-adrian.jpg' alt='Mario and Adrian'/>
            <div className='footer-menu'>
                <h5>Doormat Navigation</h5>
                <h5>Contact</h5>
                <h5>Social Media Links</h5>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/booking">
                                Reservations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order">
                                Order Online
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
                <ul>
                    <li>Address</li>
                    <li>Phone number</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>
    </footer>
);

export { Footer };