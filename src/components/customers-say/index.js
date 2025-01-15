import './style.css';
import { Feedback } from './feedback';

const feedbackList = [
    {
        name: 'Mike',
        review: 'Review text',
        img: '/img/avatar.jpg'
    },
    {
        name: 'Gregg',
        review: 'Review text',
        img: '/img/avatar.jpg'
    },
    {
        name: 'Monica',
        review: 'Review text',
        img: '/img/avatar.jpg'
    },
    {
        name: 'Rebecca',
        review: 'Review text',
        img: '/img/avatar.jpg'
    },
]

const CustomersSay = () => (
    <section className='customers-say'>
        <div className='customers-say-background'/>
        <div className='customers-say-content section-container'>
            <h2>Testimonials</h2>
            <div className='customers-say-reviews'>
                {feedbackList.map((feedback, index) => (<Feedback {...feedback} key={index} />))}
            </div>
        </div>
    </section>
);

export { CustomersSay };