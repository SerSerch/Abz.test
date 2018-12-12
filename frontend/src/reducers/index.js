import { combineReducers } from 'redux';

import userReducer from './users';
import ourUserReducer from './ourusers';

export default combineReducers({
    user: userReducer,
    ourUsers: ourUserReducer,
});