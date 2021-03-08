import xhr from './xhr';
const BASE = 'https://swapi.dev/api/';

const getPlanets = () => xhr(`${BASE}planets`);

export { getPlanets };
