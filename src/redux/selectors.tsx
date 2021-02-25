import { ITEM_STATE_FILTERS } from "../constants";

export const getItemListState = (store: any) => store.items;

export const getItemList = (store: any) =>
  getItemListState(store) ? getItemListState(store).allIds : [];

export const getItemById = (store: any, id: any) =>
  getItemListState(store) ? { ...getItemListState(store).byIds[id], id } : {};

export const getItems = (store: any) =>
  getItemList(store).map((id: any) => getItemById(store, id));

export const getItemsByItemListStatusFilter = (store: any, statusFilter: any) => {
  const allItems = getItems(store);
  switch(statusFilter) {
    case ITEM_STATE_FILTERS.FOR_SALE:
      return allItems.filter((item: any) => item.forSale);
    case ITEM_STATE_FILTERS.SOLD:
      return allItems.filter((item: any) => !item.forSale);
    case ITEM_STATE_FILTERS.ALL:
    default:
      return allItems;
  }
}
