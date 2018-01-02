import { LOGIN_USER } from './ActionTypes';

/* function to be exported */
export default function loginUser(user){
	return dispatch => {
		type: LOGIN_USER,
		payload: user
	}
}