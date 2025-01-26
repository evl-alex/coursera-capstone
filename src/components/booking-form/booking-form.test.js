import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BookingForm } from './index';
import { isDateNotInPast } from '../../utils';

const mockNavigate = jest.fn();

jest.mock('react-router', () => ({
    useNavigate: () => mockNavigate,
}))

jest.mock('../../utils', () => ({
    isDateNotInPast: jest.fn(),
}));

jest.mock('../booking-page', () => ({
    updateTimesActions: {
        dateChange: 'DATE_CHANGE',
    },
}));

describe('BookingForm', () => {
    const availableTimes = ['18:00', '19:00', '20:00'];
    const values = { date: '', time: '', guests: 1, occasion: '' };
    const setValues = jest.fn();
    const onDateChange = jest.fn();

    const renderComponent = (props = {}) =>
        render(
            <BookingForm
                availableTimes={availableTimes}
                values={values}
                setValues={setValues}
                onDateChange={onDateChange}
                {...props}
            />
        );

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should validate that the date is not in the past', () => {
        isDateNotInPast.mockReturnValue(false);

        renderComponent({ values: { ...values, date: '2025-01-24' } });

        const dateInput = screen.getByLabelText(/choose date/i);
        fireEvent.change(dateInput, { target: { value: '2025-01-24' } });

        const errorMessage = screen.getByText(/date cannot be in past/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it('should submit the form if the date is valid', () => {
        isDateNotInPast.mockReturnValue(true);

        renderComponent({ values: { ...values, date: '2025-01-25' } });

        const dateInput = screen.getByLabelText(/choose date/i);
        fireEvent.change(dateInput, { target: { value: '2025-01-25' } });

        const submitButton = screen.getByText(/make your reservation/i);
        fireEvent.click(submitButton);

        expect(mockNavigate).toHaveBeenCalledWith('confirmed', { state: { ...values, date: '2025-01-25' } });
    });

    it('should not submit the form if the date is invalid', () => {
        isDateNotInPast.mockReturnValue(false);

        const navigate = jest.fn();
        renderComponent({ values: { ...values, date: '2025-01-24' }, navigate });

        const dateInput = screen.getByLabelText(/choose date/i);
        fireEvent.change(dateInput, { target: { value: '2025-01-24' } });

        const submitButton = screen.getByText(/make your reservation/i);
        fireEvent.click(submitButton);

        expect(navigate).not.toHaveBeenCalled();
    });
});
