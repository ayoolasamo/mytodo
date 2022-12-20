import uuid from 'uuid'
export const Action = {
    ADD_TASK: "add-task",
    CHECK_TASK: "check-task",
    REMOVE_TASK: "remove-task",
    REMOVE_CTASK: "remove-completed-task"

}

export const taskReducer = (state, action) => {
    switch (action.type) {
        case Action.ADD_TASK: {
            return [...state, action.task]
        }
        case Action.CHECK_TASK:
            let taskIndex = state.findIndex(t => t.id === action.task.id);
            state[taskIndex].isChecked = action.task.isChecked
            return state.filter(task => task.id !== action.id);

        case Action.REMOVE_TASK: {
            return state.filter(task => task.id !== action.id)
        }
        case Action.REMOVE_CTASK:{
            return state.filter(task=> task.isChecked === false)
        }
        default:
            return state;
    }
}