import {REGISTER_USER, LOGIN_USER, ADD_USER, UPDATE_USER, REMOVE_USER} from '../actions/ActionTypes';

export default function(state=[], action){
	switch(action.type){
		case REGISTER_USER:
			return action.payload;
		
		case LOGIN_USER:
			return action.payload;
		
		case ADD_USER:
			return [action.payload, ...state];
			
		default:
			return state;
		
	}
}
