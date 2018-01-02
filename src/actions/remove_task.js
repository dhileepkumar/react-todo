import { REMOVE_TASK } from './ActionTypes';

/* function to be exported */
export default function removeTask(task){
	return dispatch => {
		dispatch(removeTaskAsync(task))
	};
}

/* thunk function redux */
function removeTaskAsync(task){
	return {
		type : REMOVE_TASK,
		payload : task
	};
}