//import { getPlanets } from './components/services/xhrService';
import { getPlanets } from './components/services/axiosService';

export function GET_PLANETS() {
  return dispatch => {

    dispatch({ type: 'SET_LOADING', value: true });

    return getPlanets().then(res => {
      dispatch({ type: 'SET_LIST', value: res.results })
    });
  }
}
