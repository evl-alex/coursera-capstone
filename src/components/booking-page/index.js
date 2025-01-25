import { useReducer, useState } from 'react';
import { fetchAPI } from '../../utils/api'
import { BookingForm } from '../booking-form';
import './style.css';

export const defaultTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
];

const defaultValues = {
    date: '',
    time: '17:00',
    guests: '1',
    occasion: 'Birthday',
};

export const updateTimesActions = {
    dateChange: 'dateChange',
}

export const updateTimes = (state, action) => {
    switch (action.type) {
        case updateTimesActions.dateChange: {
            return fetchAPI(new Date(action.date));
        }
        default: {
            return state;
        }
    }
};

export const initializeTimes = () => {
    return fetchAPI(new Date());
};

const BookingPage = () => {
    const [bookingValues, setBookingValues] = useState(defaultValues);
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes,  initializeTimes());

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