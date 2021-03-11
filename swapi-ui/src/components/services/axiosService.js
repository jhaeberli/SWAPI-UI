import axios from 'axios';
import { api } from '../../utils/constants';

export default async function getPlanets(activePage) {

    const url = `${api.url}${api.methods.planets}${activePage}`;

    try {
        const response = await axios.get(url);
        return response.status === 400 ? [] : response.data;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}

export { getPlanets }
