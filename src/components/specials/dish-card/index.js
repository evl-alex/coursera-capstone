import './style.css';

const DishCard = (props) => (
    <div className='dish-card'>
        <img src={props.img} alt={props.name} />
        <div className='card-content'>
            <div>
                <div className='card-heading'>
                    <span className='card-title'>
                        {props.name}
                    </span>
                    <span className='card-price'>
                        ${props.price.toLocaleString('en', {minimumFractionDigits: 2})}
                    </span>
                </div>
                <p className='card-description'>
                    {props.description}
                </p>
            </div>
            <div className='card-delivery'>
                <span>Order a delivery</span>
                <img src='/img/delivery.svg' alt='Delivery'/>
            </div>
        </div>
    </div>
)

export { DishCard };
