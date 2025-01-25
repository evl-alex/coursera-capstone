import { useReducer, useState } from 'react';
import { fetchAPI } from '../../utils/api';
import { BookingForm } from '../booking-form';
import './style.css';

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
    const result = fetchAPI(new Date());
    console.log('--- result', result);
    return result;
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