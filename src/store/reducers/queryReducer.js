import { ADD_REQUEST } from "../types";

const initialState = {
  numOfQueries: 0,
};

export const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        numOfQueries: state.numOfQueries + 1,
      };
    default:
      return state;
  }
};