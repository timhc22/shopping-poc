import { LIST_ITEM } from '../actionTypes';

const initialState = {
  allIds: [],
  byIds: {}
}

export default function(state = initialState, action: any) {
  switch (action.type) {
    case LIST_ITEM: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            listed: false
          }
        }
      };
    }
    default:
      return state;
  }
}
