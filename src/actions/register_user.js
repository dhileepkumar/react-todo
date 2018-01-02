import { REGISTER_USER } from './ActionTypes';
/*

	Reducers
	-------- 
		Reducers are the actions that specify something happened, but doesn't specity how the application changes its responce
	
	Actions
	-------
		
*/ 

export default function registerUser(user){
	return dispatch => {
		dispatch(registerUserAync(user));
	}
}


function registerUserAync(user){
	return {
		type : REGISTER_USER,
		payload : user
	}
}
