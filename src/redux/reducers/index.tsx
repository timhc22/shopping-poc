import { combineReducers } from 'redux';
import itemStateFilter from './itemStateFilter';
import items from './items';
import transactions from './transactions';

export default combineReducers({ items, itemStateFilter, transactions });
