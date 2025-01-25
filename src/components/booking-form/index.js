import './style.css';
import { useCallback } from 'react';
import { Button } from '../common/button';
import { updateTimesActions } from '../booking-page';

const BookingForm = ({ availableTimes, values, setValues, onDateChange }) => {
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log('Submitting...', values);
    }, [values]);

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor='res-date'>Choose date</label>
                <input
                    type='date'
                    id='res-date'
                    value={values.date}
                    onChange={(e) => {
                        setValues((prev) => ({ ...prev, date: e.target.value }));
                        onDateChange({ type: updateTimesActions.dateChange, newDate: e.target.value });
                    }}
                />
            </fieldset>
            <fieldset>
                <label htmlFor='res-time'>Choose time</label>
                <select
                    id='res-time'
                    value={values.time}
                    onChange={(e) => setValues((prev) => ({ ...prev, time: e.target.value }))}
                >
                    {availableTimes.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor='guests'>Number of guests</label>
                <input
                    type='number'
                    placeholder='1'
                    min='1'
                    max='10'
                    id='guests'
                    value={values.guests}
                    onChange={(e) => setValues((prev) => ({ ...prev, guests: e.target.value }))}
                />
            </fieldset>
            <fieldset>
                <label htmlFor='occasion'>Occasion</label>
                <select
                    id='occasion'
                    value={values.occasion}
                    onChange={(e) => setValues((prev) => ({ ...prev, occasion: e.target.value }))}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </fieldset>
            <Button type='submit'>Make Your Reservation</Button>
        </form>
    )
};

export { BookingForm };