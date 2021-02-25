import { LIST_ITEM } from './actionTypes';

let nextItemId = 0;

export const listItem = (content: any) => ({
  type: LIST_ITEM,
  payload: {
    id: ++nextItemId,
    content
  }
})
