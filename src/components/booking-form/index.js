import './style.css';
import { useCallback, useMemo } from 'react';
import { Button } from '../common/button';
import { updateTimesActions } from '../booking-page';
import { submitAPI } from '../../utils/api';
import { useNavigate } from 'react-router';
import { isDateNotInPast } from '../../utils';

const BookingForm = ({ availableTimes, values, setValues, onDateChange }) => {
    const navigate = useNavigate();

    const inputError = (message) => (
        <span className='validation-error'>{message}</span>
    );

    const isDateValid = useMemo(() => {
        return values.date ? isDateNotInPast(values.date) : true;
    }, [values.date]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        if (!isDateValid) {
            return;
        }

        const result = submitAPI(values);

        if (result) {
            navigate('confirmed', { state: values});
        }
    }, [values, navigate, isDateValid]);

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor='res-date'>Choose date</label>
                {!isDateValid && (inputError('Date cannot be in past'))}
                <input
                    type='date'
                    id='res-date'
                    value={values.date}
                    required
                    onChange={(e) => {
                        setValues((prev) => ({ ...prev, date: e.target.value }));
                        onDateChange({ type: updateTimesActions.dateChange, date: e.target.value });
                    }}
                />
            </fieldset>
            <fieldset>
                <label htmlFor='res-time'>Choose time</label>
                <select
                    id='res-time'
                    value={values.time}
                    required
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
                    required
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
            <Button
                type='submit'
                disabled={!isDateValid}
                aria-label='Submit Reservation'
            >
                Make Your Reservation
            </Button>
        </form>
    )
};

export { BookingForm };