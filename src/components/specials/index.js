import './style.css';
import { Button } from '../common/button';
import { DishCard } from './dish-card';

const dishes = [
    {
        name: 'Greek salad',
        price: 12.99,
        description: 'The famous greek salad of crispy lettuce, peppers,olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        img: '/img/salad.jpg'
    },
    {
        name: 'Bruchetta',
        price: 5.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        img: '/img/bruchetta.svg'
    },
    {
        name: 'Lemon Dessert',
        price: 5.00,
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        img: '/img/dessert.jpg'
    },
]

const Specials = () => (
    <section className='specials'>
        <div className='heading'>
            <h2 className='title'>This week specials!</h2>
            <Button>Online Menu</Button>
        </div>
        <div className='specials-cards'>
            {dishes.map(dish => <DishCard {...dish} />)}
        </div>
    </section>
);

export { Specials };