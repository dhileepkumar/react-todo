import { ADD_USER } from './ActionTypes';

/* function to be exported */
export default function addUser(user){
	return dispatch => {
		dispatch(addUserAsync(user))
	};
}

/* thunk function redux */
function addUserAsync(user){
	return {
		type : ADD_USER,
		payload : user
	};
}