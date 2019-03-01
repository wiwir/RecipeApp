import { photos } from "../tempList";
import toPairs from "lodash.topairs";

import { REMOVE_POST, ADD_POST } from "../actions";

export const postReducer = (state = photos, action) => {
  console.log(action.id, "escucho el id del payload");
  switch (action.type) {
    case REMOVE_POST:
      return [...state.filter(item=> item.id !== action.id)];
    case ADD_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postReducer;
