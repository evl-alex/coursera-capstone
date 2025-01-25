import './style.css'
import { Button } from '../common/button';
import { useLocation, useNavigate } from 'react-router';
import { useCallback } from 'react';

const ConfirmedBooking = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log('location state', state);
    const handleReturnClick = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return (
        <main>
            <section className='booking-form booking-confirmation'>
                <div className='booking-background'/>
                <h2 className='title'>
                    Booking Confirmed
                </h2>
                <div className='booking-confirmation-details'>
                    <span className='confirmation-title'>Date:</span>
                    <span>{state.date}</span>
                    <span className='confirmation-title'>Guests:</span>
                    <span>{state.guests}</span>
                    <span className='confirmation-title'>Occasion:</span>
                    <span>{state.occasion}</span>
                    <span className='confirmation-title'>Time:</span>
                    <span>{state.time}</span>
                </div>
                <Button onClick={handleReturnClick}>Return Home</Button>
            </section>
        </main>
    )
}

export { ConfirmedBooking };