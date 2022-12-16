import React from "react";
import { useContext } from "react";
import { TaskContext } from '../contexts/taskcontext';

const TodoStatus = () => {
    const {tasks} = useContext(TaskContext)
    return (
        <div className="p-4 liststatus text-center item grid grid-cols-3" >
            <p>All</p>
            <p>Active</p>
            <p>Completed ({tasks.length})</p>

        </div>
    )
}

export default TodoStatus;