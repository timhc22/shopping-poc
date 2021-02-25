import {
  LIST_ITEM,
  SET_ITEM_STATE_FILTER
} from './actionTypes';

let nextItemId = 0;

export const listItem = (content: any) => ({
  type: LIST_ITEM,
  payload: {
    id: ++nextItemId,
    content
  }
})

export const setItemStateFilter = (itemStateFilter: any) => ({
  type: SET_ITEM_STATE_FILTER,
  payload: { itemStateFilter }
})
