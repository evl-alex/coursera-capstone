import { render, screen } from '@testing-library/react';
import {
    BookingPage,
    defaultTimes,
    initializeTimes,
    updateTimes,
    updateTimesActions
} from './index';

describe('Booking Page', () => {
    test('Renders the Booking Form heading', () => {
        render(<BookingPage />);
        const headingElement = screen.getByText('Book your table');
        expect(headingElement).toBeInTheDocument();
    });

    describe('initializeTimes', () => {
        it('Should return correct initial times', () => {
            expect(initializeTimes()).toEqual(defaultTimes);
        })
    });

    describe('updateTimes', () => {
        it('Returns the same state on date change', () => {
            expect(updateTimes(defaultTimes, { type: updateTimesActions.dateChange }))
                .toEqual(defaultTimes)
        });
    });
})