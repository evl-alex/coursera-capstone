import { Button } from '../common/button';
import './style.css';

const Hero = () => (
    <section className='hero'>
        <div className='hero-background' />
        <div className='hero-about'>
            <p className='title'>Little Lemon</p>
            <p className='sub-title'>Chicago</p>
            <p className='lead-text'>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
            </p>
            <Button>Reserve a Table</Button>
        </div>
        <img src='/img/food.jpg' alt='Food'/>
    </section>
);

export { Hero };