import initialState from "./initialState";

export default function (state = initialState.boards, action) {
  switch (action.type) {
    case "GET_BOARDS":
      return {
        ...state,
        ...action.boards,
      };
    default:
      return state;
  }
}
