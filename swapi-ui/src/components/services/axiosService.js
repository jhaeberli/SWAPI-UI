import axios from 'axios';
import { api } from '../../utils/constants';

export default async function getPlanets(activePage) {

    const url = `${api.url}${api.methods.planets}${activePage}`;

    try {
        const response = await axios.get(url);
        return response.status === 200 ? response.data : [];
    }
    catch (error) {
        console.log('Axios - Error getting Planets: \n', error);
        throw error;
    }
}

export { getPlanets }
