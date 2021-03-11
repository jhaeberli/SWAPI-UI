//import { getPlanets } from './components/services/xhrService';
import { getPlanets } from './components/services/axiosService';

export function SET_ACTIVE_PAGE(activePage) {
  return dispatch => {

    dispatch({ type: 'SET_LOADING', value: true });

    return getPlanets(activePage).then(res => {
      dispatch({ type: 'SET_LIST', value: { list: res.results, column: 'name', direction: 'ascending' } })
    });
  }
}

export function SET_LIST(list, column, direction) {
  return dispatch => {
    dispatch({ type: 'SET_LIST', value: { list, column, direction } });
  }
}
