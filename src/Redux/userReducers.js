// userReducer.js
import { SAVE_USER_DATA } from './userActions';

const initialState = {
  userData: {
    name:'hello',email: '776hgh'
  }
};

const userReducer = (state = initialState, action) => {
 console.log("stateredu", state)
    switch (action.type) {
      
    case SAVE_USER_DATA:
      {console.log("userDataSave", action, state)}
      return {
         state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;