import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  loading: false,
  list: []
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_LOADING':
      return Object.assign({}, state, {
        loading: action.value
      })

    case 'SET_LIST':
      return Object.assign({}, state, {
        loading: false,
        list: action.value
      })

    default:
      return state;
  }
};

export default createStore(reducer, initialState, applyMiddleware(thunk));
