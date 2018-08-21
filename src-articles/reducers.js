import { combineReducers } from 'redux';
import { RECEIVE_ARTICLES } from './App';

const articles = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      console.log("5.Reducer:action", action);
      return action.articles;
    default:
      return state;
  }
};

export default combineReducers({ articles });
