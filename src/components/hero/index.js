import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../common/button';
import './style.css';

const Hero = () => {
    const navigate = useNavigate();
    const handleReserveButtonCLick = useCallback(() => {
        navigate('/booking');
    }, [navigate]);

    return (
        <section className='hero'>
            <div className='hero-background' />
            <div className='hero-content section-container'>
                <div className='hero-about'>
                    <h2 className='title'>Little Lemon</h2>
                    <p className='sub-title'>Chicago</p>
                    <p className='lead-text'>
                        We are a family owned Mediterranean restaurant, focused on
                        traditional recipes served with a modern twist.
                    </p>
                    <Button onClick={handleReserveButtonCLick}>Reserve a Table</Button>
                </div>
                <img src='/img/food.jpg' alt='Food'/>
            </div>
        </section>
    )
};

export { Hero };