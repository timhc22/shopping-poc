import { LIST_ITEM, TOGGLE_ITEM_STATUS, CREDIT_ACCOUNT, DEBIT_ACCOUNT } from '../actionTypes';

// everything in one state for now
const initialState = {
  allIds: [1,2,3,4,5,6],
  byIds: {
    1: { content: 'Coffee', sellerId: 1, sold: false, price: 3, buyerId: null },
    2: { content: 'T-Shirt', sellerId: 2, sold: false, price: 5, buyerId: null },
    3: { content: 'Tea', sellerId: 1, sold: false, price: 2.5, buyerId: null },
    4: { content: 'Cake', sellerId: 1, sold: false, price: 3.5, buyerId: null },
    5: { content: 'Shorts', sellerId: 2, sold: false, price: 8, buyerId: null },
    6: { content: 'Hoody', sellerId: 2, sold: false, price: 12, buyerId: null },
  },
  // todo probably better to combine timestamp and Id, but we could build sellers and buyers to inherit an underlying user so ids were unique to users
  allTimestamps: [1614325077531,1614325077533,1614325077539,1614325077535,1614325077537,1614325077540],
  transactions: [
    { timestamp: 1614325077531, transactionType: 'credit', type: 'seller', id: 1, amount: 52 },
    { timestamp: 1614325077533, transactionType: 'credit', type: 'seller', id: 2, amount: 66 },
    { timestamp: 1614325077539, transactionType: 'debit', type: 'seller', id: 2, amount: -5 }, // using a minus for simplicity (instead of writing an extra function to total debits and credits and then diff them) as this is a liabilities type account
    { timestamp: 1614325077535, transactionType: 'credit', type: 'buyer', id: 1, amount: 72 },
    { timestamp: 1614325077537, transactionType: 'credit', type: 'buyer', id: 2, amount: 85 },
    { timestamp: 1614325077540, transactionType: 'debit', type: 'buyer', id: 2, amount: -10 }, // using a minus for simplicity (instead of writing an extra function to total debits and credits and then diff them) as this is a liabilities type account
  ]
}

export default function(state: any = initialState, action: any) {
  switch (action.type) {
    case LIST_ITEM: {
      const { content, sellerId, price } = action.payload;

      let id = Math.max.apply(Math, state.allIds);
      id = ++id;

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
      let newState = {};
      let item = state.byIds[id];

      if (item.sold) {
        console.log('is cancelled');
        newState = addTransaction(state, 'buyer', buyerId, item.price, 'credit');
      } else if (!item.sold) {
        console.log('is ordered');
        newState = addTransaction(state, 'buyer', buyerId, item.price*-1, 'debit');
      }

      newState = {
        ...newState,
        // can use state here as have only changed the transactions states above
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            sold: !state.byIds[id].sold,
            buyerId: state.byIds[id].sold ? null : buyerId
          }
        }
      }
      return newState;
    }
    case CREDIT_ACCOUNT: {
      const { type, id, amount } = action.payload;
      return addTransaction(state, type, id, amount, 'credit');
    }
    case DEBIT_ACCOUNT: {
      const { type, id, amount } = action.payload;
      return addTransaction(state, type, id, amount*-1, 'debit');
    }
    default:
      return state;
  }
}

/**
 * Add transaction
 *
 * @param state
 * @param type
 * @param id
 * @param amount
 * @param transactionType
 */
function addTransaction(state: any, type: string, id: number, amount: number, transactionType: string) {
  const now = Date.now();
  return {
    ...state,
      allTimestamps: [...state.allTimestamps, now],
      transactions: [
      ...state.transactions,
      {
        timestamp: now,
        transactionType: transactionType,
        type: type,
        id: id,
        amount: amount,
      }
    ]
  }
}
