import { FLIGHTS_ARRAY } from '../../arr/Flights.js';
import { craeteFlight } from '../header/craeteFlight.js';

export const createAllFlights = () => {
    FLIGHTS_ARRAY.map(craeteFlight)
}
