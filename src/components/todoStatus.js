import React from "react";

const TodoStatus = (all,active,completed) => {
    return (
        <div className="p-4 liststatus text-center item grid grid-cols-3" >
            <p onClick={all}>All</p>
            <button onClick={active}>Active</button>
            <p onClick={completed}>Completed </p>

        </div>
    )
}

export default TodoStatus;