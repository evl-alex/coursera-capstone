import { Hero } from '../hero';
import { Specials } from '../specials';
import { CustomersSay } from '../customers-say';
import { Chicago } from '../chicago';

const Homepage = () => (
    <main>
        <Hero />
        <Specials />
        <CustomersSay />
        <Chicago />
    </main>
);

export { Homepage };