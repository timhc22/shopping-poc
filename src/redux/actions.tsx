import {
  LIST_ITEM,
  SET_ITEM_STATE_FILTER,
  TOGGLE_ITEM_STATUS
} from './actionTypes';

let nextItemId = 0;

export const listItem = (content: any) => ({
  type: LIST_ITEM,
  payload: {
    id: ++nextItemId,
    content
  }
});

export const toggleItemStatus = (id: number) => ({
  type: TOGGLE_ITEM_STATUS,
  payload: { id }
});

export const setItemStateFilter = (itemStateFilter: any) => ({
  type: SET_ITEM_STATE_FILTER,
  payload: { itemStateFilter }
});
