import { SET_ITEM_STATE_FILTER } from '../actionTypes'
import { ITEM_STATE_FILTERS } from "../../constants";

const initialState = ITEM_STATE_FILTERS.FOR_SALE;

const itemStateFilter = (state: string = initialState, action: any) => {
  switch (action.type) {
    case SET_ITEM_STATE_FILTER: {
      return action.payload.itemStateFilter;
    }
    default: {
      return state;
    }
  }
}

export default itemStateFilter;
