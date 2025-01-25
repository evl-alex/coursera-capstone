import './App.css';
import { Route, Routes } from 'react-router';
import { Homepage } from './components/homepage';
import { BookingPage } from './components/booking-page';
import { Layout } from './components/layout/root';
import { ConfirmedBooking } from './components/confirmed-booking';

function App() {
    return (
        <Layout>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path='booking'>
                    <Route index element={<BookingPage />} />
                    <Route path='confirmed' element={<ConfirmedBooking />} />
                </Route>
            </Routes>
        </Layout>
    );
}

export default App;
