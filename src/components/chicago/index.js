import './style.css';

const Chicago = () => (
    <section className='chicago section-container'>
        <div className='chicago-text'>
            <div className='heading'>
                <h2 className='title'>Little Lemon</h2>
                <h3 className='sub-title'>Chicago</h3>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                enim velit mollit.
            </p>
        </div>
        <div className='chicago-images'>
            <img className='chicago-images-top' src='/img/mario-and-adrian.jpg' alt='Mario and Adrian'/>
            <img className='chicago-images-bottom' src='/img/restaurant.jpg' alt='restaurant'/>
        </div>
    </section>
);

export { Chicago };