import { useReducer, useState } from 'react';
import { BookingForm } from '../booking-form';
import './style.css';

const defaultTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
];

const BookingPage = () => {
    const [bookingValues, setBookingValues] = useState({
        date: '',
        time: '17:00',
        guests: '1',
        occasion: 'Birthday',
    })
    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'dateChange': {
                setBookingValues((prev) => ({ ...prev, time: state[0] }));
                return state
            }
        }

        throw Error('Unknown action: ' + action.type);
    };
    const initializeTimes = () => {
        return defaultTimes;
    };
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes());

    return (
        <main>
            <section className='booking-form'>
                <div className='booking-background'/>
                <h2 className='title'>Book your table</h2>
                <BookingForm
                    availableTimes={availableTimes}
                    values={bookingValues}
                    setValues={setBookingValues}
                    onDateChange={dispatchAvailableTimes}
                />
            </section>
        </main>
    );
};

export { BookingPage };