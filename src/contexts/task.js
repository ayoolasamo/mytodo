import React, { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/task";

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // const sortedTasks = tasks.sort((t, f) =>  (f.isChecked === t.isChecked)? 0 : f.isChecked? -1 : 1);
  // const unchecked = tasks.isChecked.length;
  const filteractive = tasks.filter((task) => task.isChecked === false);
  const filtercompleted = tasks.filter((task) => task.isChecked === true);
  return <TaskContext.Provider value={{ tasks, filteractive, filtercompleted, dispatch }}>{props.children}</TaskContext.Provider>;
};
export default TaskContextProvider;
