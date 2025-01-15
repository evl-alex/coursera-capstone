import './style.css';

const Feedback = (props) => (
    <div className='feedback'>
        <h5 className='feedback-highlighted-text'>Rating</h5>
        <div className='feedback-user-info'>
            <img src={props.img} alt={props.name}/>
            <p className='feedback-highlighted-text'>{props.name}</p>
        </div>
        <p className='feedback-review'>{props.review}</p>
    </div>
)

export { Feedback };
