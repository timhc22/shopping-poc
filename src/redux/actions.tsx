import {
  LIST_ITEM,
  SET_ITEM_STATE_FILTER,
  TOGGLE_ITEM_STATUS,
  CREDIT_ACCOUNT,
  DEBIT_ACCOUNT
} from './actionTypes';

/**
 * Items
 */

export const listItem = (sellerId: number, content: any, price: number) => ({
  type: LIST_ITEM,
  payload: {
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

/**
 * Transactions
 */

export const creditAccount = (type: string, id: number, amount: number) => ({
  type: CREDIT_ACCOUNT,
  payload: { type, id, amount }
})

export const debitAccount = (type: string, id: number, amount: number) => ({
  type: DEBIT_ACCOUNT,
  payload: { type, id, amount }
})
