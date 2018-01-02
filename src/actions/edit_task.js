import { EDIT_TASK } from './ActionTypes';

/* function to be exported */
export default function editTask(task){
	return dispatch => {
		dispatch(editTaskAsync(task))
	};
}

/* thunk function redux */
function editTaskAsync(task){
	return {
		type : EDIT_TASK,
		payload : task
	};
}