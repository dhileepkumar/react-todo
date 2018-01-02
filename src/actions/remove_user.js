import { REMOVE_USER } from './ActionTypes';

/* function to be exported */
export default function removeUser(user){
	return dispatch => {
		dispatch(removeUserAsync(user))
	};
}

/* thunk function redux */
function removeUserAsync(user){
	return {
		type : REMOVE_USER,
		payload : user
	};
}