import { SET_ITEM_STATE_FILTER } from '../actionTypes'
import { ITEM_STATE_FILTERS } from "../../constants";

const initialState = ITEM_STATE_FILTERS.ALL;

const itemStateFilter = (state: string = initialState, action: any) => {
  switch (action.type) {
    case SET_ITEM_STATE_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
}

export default itemStateFilter;
