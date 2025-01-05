import style from './style.module.css';
import { Header } from '../../header';
import { Footer } from '../../Footer';

const Layout = ({ children }) => (
    <main className={style.main}>
        <Header />
        {children}
        <Footer />
    </main>
);

export { Layout };