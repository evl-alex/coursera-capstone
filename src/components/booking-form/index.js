import './style.css';
import { useCallback, useState } from 'react';
import { Button } from '../common/button';

const BookingForm = () => {
    const [availableTimes, setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState(availableTimes[0]);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log('Submitting...', date, time, guests, occasion);
    }, [date, time, guests, occasion]);

    return (
        <section className='booking-form'>
            <div className='booking-background'/>
            <h2 className='title'>Book your table</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor='res-date'>Choose date</label>
                    <input
                        type='date'
                        id='res-date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='res-time'>Choose time</label>
                    <select
                        id='res-time'
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
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
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='occasion'>Occasion</label>
                    <select
                        id='occasion'
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </fieldset>
                <Button type='submit'>Make Your Reservation</Button>
            </form>
        </section>
    )
};

export { BookingForm };