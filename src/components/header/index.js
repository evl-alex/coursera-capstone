import { Nav } from '../nav';
import style from './style.module.css';

const Header = () => (
    <header className={style.header}>
        <img src='/Logo.svg' alt='Logo'/>
        <Nav />
    </header>
);

export { Header };