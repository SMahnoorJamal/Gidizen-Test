// userReducer.js
import { SAVE_USER_DATA } from './userActions';

const initialState = {
  userData: {},
};

const userReducer = (state = initialState, action) => {
 console.log("stateredu", state)
    switch (action.type) {
      
    case SAVE_USER_DATA:
      {console.log("userDataSave", action)}
      return {
        // ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;