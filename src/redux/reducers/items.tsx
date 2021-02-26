import { LIST_ITEM, TOGGLE_ITEM_STATUS } from '../actionTypes';

const initialState = {
  allIds: [1,2,3,4,5,6],
  byIds: {
    1: { content: 'Coffee', sellerId: 1, sold: false, price: 3, buyerId: null },
    2: { content: 'T-Shirt', sellerId: 2, sold: false, price: 5, buyerId: null },
    3: { content: 'Tea', sellerId: 1, sold: false, price: 2.5, buyerId: null },
    4: { content: 'Cake', sellerId: 1, sold: false, price: 3.5, buyerId: null },
    5: { content: 'Shorts', sellerId: 2, sold: false, price: 8, buyerId: null },
    6: { content: 'Hoody', sellerId: 2, sold: false, price: 12, buyerId: null },
  }
}

export default function(state: any = initialState, action: any) {
  switch (action.type) {
    case LIST_ITEM: {
      const { id, content, sellerId, price } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            sellerId,
            sold: false,
            price,
            buyerId: null
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
            buyerId: state.byIds[id].sold ? null : buyerId
          }
        }
      }
    }
    default:
      return state;
  }
}
