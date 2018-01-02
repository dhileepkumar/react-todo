import { combineReducers } from 'redux';
import UserReducer from './reducer_user_details';

const rootReducer = combineReducers({
	userDetails : UserReducer
});

export default rootReducer;