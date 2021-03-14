//import { getPlanets } from './components/services/xhrService';
import { getPlanets } from './components/services/axiosService';
import { actionTypes} from './utils/constants';


export function SET_ACTIVE_PAGE(activePage) {
  return dispatch => {

    dispatch({ type: actionTypes.SET_LOADING, value: true });

    return getPlanets(activePage).then(res => {
      dispatch({ type: actionTypes.SET_LIST, value: { list: res.results, column: 'name', direction: 'ascending' } })
    });
  }
}

export function SET_LIST(list, column, direction) {
  return dispatch => {
    dispatch({ type: actionTypes.SET_LIST, value: { list, column, direction } });
  }
}
