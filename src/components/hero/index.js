import { Button } from '../common/button';
import './style.css';

const Hero = () => (
    <section className='hero'>
        <div className='hero-background' />
        <div className='hero-content'>
            <div className='hero-about'>
                <h2 className='title'>Little Lemon</h2>
                <p className='sub-title'>Chicago</p>
                <p className='lead-text'>
                    We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </p>
                <Button>Reserve a Table</Button>
            </div>
            <img src='/img/food.jpg' alt='Food'/>
        </div>
    </section>
);

export { Hero };