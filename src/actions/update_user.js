import { UPDATE_USER } from './ActionTypes';

/* function to be exported */
export default function updateUser(user){
	return dispatch => {
		dispatch(updateUserAsync(user))
	}
}

/* thunk function redux */
function updateUserAsync(user){
	return {
		type : UPDATE_USER,
		payload : user
	}
}