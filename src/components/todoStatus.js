import React from "react";

const TodoStatus = () => {
    return (
        <div className="p-4 liststatus text-center item grid grid-cols-3" >
            <p>All</p>
            <p>Active</p>
            <p>Completed</p>
        </div>
    )
}

export default TodoStatus;