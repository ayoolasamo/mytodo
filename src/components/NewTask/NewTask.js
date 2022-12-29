import React, { useContext, useState } from "react";
import { TaskContext } from "../../contexts/task";
import { Action } from "../../reducers/task";
import uuid from "uuid/v1";

export const NewTask = () => {
  const { dispatch } = useContext(TaskContext);
  const [description, setDescription] = useState("");
  const onAddTask = (e) => {
    e.preventDefault();

    dispatch({
      type: Action.ADD_TASK,
      task: {
        id: uuid(),
        isChecked: false,
        created: new Date(),
        description,
      },
    });
    setDescription("");
  };
  return (
    <form className="item  p-4 " onSubmit={onAddTask}>
      {/* <input type="checkbox"name="status" className="rounded-full mx-2" /> */}
      <input
        className="w-full outline-none "
        label="Add Task"
        variant="outlined"
        size="small"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Create a new todo..."
      ></input>
    </form>
  );
};
