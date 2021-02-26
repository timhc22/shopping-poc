import {
  LIST_ITEM,
  SET_ITEM_STATE_FILTER,
  TOGGLE_ITEM_STATUS,
  CREDIT_ACCOUNT,
  DEBIT_ACCOUNT,
  DISPATCH_ITEM,
  COMPLETE_ITEM,
  COMPLAIN_ITEM
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

export const dispatchItem = (id: number) => ({
  type: DISPATCH_ITEM,
  payload: { id }
});

export const completeItem = (id: number) => ({
  type: COMPLETE_ITEM,
  payload: { id }
});

export const complainItem = (id: number) => ({
  type: COMPLAIN_ITEM,
  payload: { id }
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
