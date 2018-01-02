import { ADD_TASK } from './ActionTypes';

/* function to be exported */
export default function addTask(task){
	return dispatch => {
		dispatch(addTaskAsync(task))
	};
}

/* thunk function redux */
function addTaskAsync(task){
	return {
		type : ADD_TASK,
		payload : task
	};
}