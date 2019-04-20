import { combineReducers } from "redux";

import menuItems from "./menuItemsReducer";
import pages from "./pagesReducer";
import aboutReducer from "./aboutReducer";
import boardsReducer from "./boardsReducer";

const combinedReducer = combineReducers({
  menuItems,
  pages,
  boards: boardsReducer,
  about: aboutReducer,
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
