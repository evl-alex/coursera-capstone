import style from './style.module.css';

const Nav = () => (
    <nav className={style.nav}>
        <ul>
            <li><a href="/public">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </nav>
);

export { Nav };