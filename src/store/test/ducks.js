import { TEST_ACTION, TEST_SAGA_ACTION, TEST_SAGA_ASYNC_ACTION } from "./types";

// actions
export const testAction = payload => ({
  type: TEST_ACTION,
  payload
});

// initial state
const initialState = {
  text: "text",
  sagaText: "sagaText"
};

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        text: action.payload
      };

    case TEST_SAGA_ACTION:
      console.log("a");
      return {
        ...state
      };
    case TEST_SAGA_ASYNC_ACTION:
      console.log("c");
      return {
        ...state,
        sagaText: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
