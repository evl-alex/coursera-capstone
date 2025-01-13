import { Nav } from '../nav';
import './style.css';
import { Link } from 'react-router';

const Header = () => (
    <header className='header'>
        <Link to='/'>
            <img src='/img/Logo.svg' alt='Logo'/>
        </Link>
        <Nav/>
    </header>
);

export { Header };