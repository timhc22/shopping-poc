type itemStateFilters = {
  [key: string]: string
}

// this determines order on filter
export const ITEM_STATE_FILTERS: itemStateFilters = {
  FOR_SALE: 'for sale',
  SOLD: 'sold',
  DISPATCHED: 'dispatched',
  COMPLETE: 'complete',
  COMPLAINED: 'complained',
  ALL: 'all'
};
