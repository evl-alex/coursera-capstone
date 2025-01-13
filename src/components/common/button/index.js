import './style.css';

const Button = ({ children }) => (
    <button className='button card-title'>
        {children}
    </button>
);

export { Button };