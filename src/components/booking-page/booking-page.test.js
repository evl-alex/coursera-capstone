import { render, screen } from '@testing-library/react';
import {
    BookingPage,
    initializeTimes,
    updateTimes,
    updateTimesActions
} from './index';

const defaultTimes = ['17:00', '18:00'];

jest.mock('react-router', () => ({
    useNavigate: jest.fn(),
}))

jest.mock('../../utils/api', () => ({
    fetchAPI: () => defaultTimes,
    submitAPI: () => true,
}))


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