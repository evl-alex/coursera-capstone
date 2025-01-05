import './App.css';
import { Route, Routes } from 'react-router';
import { Homepage } from './components/homepage';
import { BookingPage } from './components/booking-page';
import { Layout } from './components/layout/Root';

function App() {
    return (
        <Layout>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path='/booking' element={<BookingPage />} />
            </Routes>
        </Layout>
    );
}

export default App;
