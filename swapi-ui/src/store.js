import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  list: [],
  activePage: 0,
  direction: 'ascending',
  column: 'name'
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_LOADING':
      return Object.assign({}, state, {
        loading: action.value,
      })

    case 'SET_LIST':
      return Object.assign({}, state, {
        loading: false,
        list: action.value.list,
        direction: action.value.direction,
        column: action.value.column,
      })

    case 'SET_ACTIVE_PAGE':
      return Object.assign({}, state, {
        loading: true,
        activePage: action.value
      })

    default:
      return state;
  }
};

export default createStore(reducer, initialState, applyMiddleware(thunk));
