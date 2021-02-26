/**
 * Items
 */

import { ITEM_STATE_FILTERS } from "../constants";

export const getItemListState = (store: any) => store.items;

export const getItemList = (store: any) =>
  getItemListState(store) ? getItemListState(store).allIds : [];

// todo rename?
export const getItemById = (store: any, id: any) =>
  getItemListState(store) ? { ...getItemListState(store).byIds[id], id } : {};

export const getItems = (store: any) =>
  getItemList(store).map((id: any) => getItemById(store, id));

// todo rename?
export const getItemsByItemListStateFilter = (store: any, statusFilter: any) => {
  const allItems = getItems(store);
  switch(statusFilter) {
    case ITEM_STATE_FILTERS.COMPLETE:
      return allItems.filter((item: any) => item.complete);
    case ITEM_STATE_FILTERS.COMPLAINED:
      return allItems.filter((item: any) => item.complained);
    case ITEM_STATE_FILTERS.DISPATCHED:
      return allItems.filter((item: any) => item.dispatched);
    case ITEM_STATE_FILTERS.ORDERED:
      return allItems.filter((item: any) => item.ordered);
    case ITEM_STATE_FILTERS.FOR_SALE:
      return allItems.filter((item: any) => !item.ordered);
    case ITEM_STATE_FILTERS.ALL:
      return allItems;
    default:
      return allItems.filter((item: any) => !item.ordered);
  }
}

/**
 * Transactions/Account Balances
 */

export const getTransactionsState = (store: any) => store.transactions;
export const getTransactions = (store: any) =>
  getTransactionsState(store) ? getTransactionsState(store).allTimestamps : [];

// export const getUserBalance = (store: any, type: string, id: number) => {
//   console.log('here');
//   console.log(store);
//   getTransactions(store) // todo return specifics
// }
//
