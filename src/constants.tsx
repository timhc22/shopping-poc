type itemStateFilters = {
  [key: string]: string
}

// this determines order on filter
export const ITEM_STATE_FILTERS: itemStateFilters = {
  ALL: 'all',
  FOR_SALE: 'for sale',
  ORDERED: 'ordered',
  DISPATCHED: 'dispatched',
  COMPLETE: 'complete',
  COMPLAINED: 'complained'
};
