// rootReducer.js
import { combineReducers } from 'redux';
import userReducer from '../Redux/userReducers';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if
   
});

export default rootReducer;