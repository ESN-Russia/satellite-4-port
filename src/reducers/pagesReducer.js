import initialState from "./initialState";

export default function (state = initialState.pages, action) {
  switch (action.type) {
    case "GET_PAGES":
      return {
        ...state,
        ...action.pages,
      };
    default:
      return state;
  }
}
