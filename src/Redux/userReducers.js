// userReducer.js
import { SAVE_USER_DATA } from './userActions';

const initialState = {
  userData: {},
};

const userReducer = (state = initialState, action) => {
 console.log("stateredu", state, ...state)
    switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;