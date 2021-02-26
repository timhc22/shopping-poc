import { combineReducers } from 'redux';
import itemStateFilter from './itemStateFilter';
import items from './state';

export default combineReducers({ items, itemStateFilter });
