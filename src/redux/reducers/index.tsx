import { combineReducers } from 'redux';
import itemStateFilter from './itemStateFilter';
import items from './items';

export default combineReducers({ items, itemStateFilter });
