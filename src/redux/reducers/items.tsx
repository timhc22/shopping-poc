import { LIST_ITEM, TOGGLE_ITEM_STATUS } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
}

export default function(state: any = initialState, action: any) {
  switch (action.type) {
    case LIST_ITEM: {
      const { id, content, sellerId } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            sellerId,
            sold: false
          }
        }
      };
    }
    case TOGGLE_ITEM_STATUS: {
      const { id, buyerId } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            sold: !state.byIds[id].sold,
            buyerId: buyerId
          }
        }
      }
    }
    default:
      return state;
  }
}
