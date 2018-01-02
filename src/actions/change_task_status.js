import { CHANGE_TASK_STATUS } from './ActionTypes';

/* function to be exported */
export default function changeTaskStatus(task){
	return dispatch => {
		dispatch(changeTaskStatusAsync(task))
	};
}

/* thunk function redux */
function changeTaskStatusAsync(task){
	return {
		type : CHANGE_TASK_STATUS,
		payload : task
	};
}