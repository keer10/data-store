import actionTypes from "../actions/types";

const initialState = {
  items: [],
  pageNumber: 1,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA:
      return { ...state, items: action.payload };

    case actionTypes.DELETE_ROW:
      const newState = {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

      return newState;

    case actionTypes.INCREMENT_PAGE_NUM:
      return { ...state, pageNumber: state.pageNumber + 1 };

    case actionTypes.DECREMENT_PAGE_NUM:
      return {
        ...state,
        pageNumber: state.pageNumber > 1 ? state.pageNumber - 1 : 1,
      };

    case actionTypes.GO_TO_FIRST:
      return { ...state, pageNumber: 1 };

    case actionTypes.ADD_ITEM: 
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export default appReducer;
