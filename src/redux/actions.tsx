import {
  LIST_ITEM,
  SET_ITEM_STATE_FILTER,
  TOGGLE_ITEM_STATUS
} from './actionTypes';

let nextItemId = 0;

export const listItem = (sellerId: number, content: any, price: number) => ({
  type: LIST_ITEM,
  payload: {
    id: ++nextItemId,
    sellerId,
    content,
    price
  }
});

export const toggleItemStatus = (id: number, buyerId: number) => ({
  type: TOGGLE_ITEM_STATUS,
  payload: { id, buyerId }
});

export const setItemStateFilter = (itemStateFilter: any) => ({
  type: SET_ITEM_STATE_FILTER,
  payload: { itemStateFilter }
});
