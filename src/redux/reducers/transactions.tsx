import { CREDIT_ACCOUNT } from '../actionTypes';

const initialState = {
  // todo probably better to combine timestamp and Id, but we could build sellers and buyers to inherit an underlying user so ids were unique to users
  allTimestamps: [1614325077531,1614325077533,1614325077539,1614325077535,1614325077537,1614325077540],
  byTimestamp: {
    1614325077531: { transactionType: 'credit', type: 'seller', id: 1, amount: 10 },
    1614325077533: { transactionType: 'credit', type: 'seller', id: 2, amount: 10 },
    1614325077539: { transactionType: 'debit', type: 'seller', id: 2, amount: -5 }, // using a minus for simplicity (instead of writing an extra function to total debits and credits and then diff them) as this is a liabilities type account
    1614325077535: { transactionType: 'credit', type: 'buyer', id: 1, amount: 10 },
    1614325077537: { transactionType: 'credit', type: 'buyer', id: 2, amount: 20 },
    1614325077540: { transactionType: 'debit', type: 'buyer', id: 2, amount: -10 }, // using a minus for simplicity (instead of writing an extra function to total debits and credits and then diff them) as this is a liabilities type account
  }
}

export default function(state: any = initialState, action: any) {
  const now = Date.now();

  switch (action.type) {
    case CREDIT_ACCOUNT: {
      const { type, id, amount } = action.payload;
      return {
        ...state,
        allTimestamps: [...state.allTimestamps, now],
        byTimestamp: {
          ...state.byTimestamp,
          [now]: {
            transactionType: 'credit',
            type: type,
            id: id,
            amount: amount,
          }
        }
      }
    }
    default:
      return state;
  }
}
