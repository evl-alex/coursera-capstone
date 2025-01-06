import { Hero } from '../hero';
import { Specials } from '../specials';
import { CustomersSay } from '../customers-say';
import { Chicago } from '../chicago';

const Homepage = () => (
    <div>
        <Hero />
        <Specials />
        <CustomersSay />
        <Chicago />
    </div>
);

export { Homepage };