import { Nav } from '../nav';
import style from './style.module.css';
import { Link } from 'react-router';

const Header = () => (
    <header className={style.header}>
        <Link to='/'>
            <img src='/img/Logo.svg' alt='Logo'/>
        </Link>
        <Nav/>
    </header>
);

export { Header };