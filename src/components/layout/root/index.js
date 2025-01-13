import './style.css';
import { Header } from '../../header';
import { Footer } from '../../footer';

const Layout = ({ children }) => (
    <div className='main'>
        <Header />
        {children}
        <Footer />
    </div>
);

export { Layout };