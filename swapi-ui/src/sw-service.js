import xhr from './xhr';
import { api } from './utils/constants';

const url = `${api.url}${api.methods.planets}`;

const getPlanets = () => xhr(url);

export { getPlanets };
