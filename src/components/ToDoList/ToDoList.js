import React, { useContext } from "react";
import { ListItem } from "../ListItem/ListItem";
import { useState } from "react";
import { useEffect } from "react";
import { Action } from "../../reducers/task";
import { TaskContext } from "../../contexts/task";
// import { Draggable } from "react-drag-reorder";

export const ToDoList = () => {
  const { tasks, dispatch, filteractive, filtercompleted } = useContext(TaskContext);
  const [filterTasks, setFilter] = useState(tasks);

  const toggleFilter = (fileterStatus) => {
    if (fileterStatus === "active") {
      setFilter(filteractive);
    }
    if (fileterStatus === "all") {
      setFilter(tasks);
    }
    if (fileterStatus === "completed") {
      setFilter(filtercompleted);
    }
  };

  useEffect(() => {
    setFilter(tasks);
  }, [tasks]);

  const handleCheck = (id, isChecked) => {
    dispatch({
      type: Action.CHECK_TASK,
      task: {
        id,
        isChecked,
      },
    });
  };
  //for the filter buttons
  const btns = document.getElementsByClassName("filter");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  return (
    <div className="grid md:w-1/2 lg:w-1/3 m-auto">
      <div className="py-2 px-6  listbody md:px-0 ">
        <div className="item itembody">
          {/* <Draggable> */}

          {filterTasks.map((task) => {
            return (
              <div>
                <ListItem
                  item={task.description}
                  status={task.isChecked}
                  click={() => {
                    handleCheck(task.id, !task.isChecked);
                  }}
                  remove={() => {
                    dispatch({
                      type: Action.REMOVE_TASK,
                      id: task.id,
                    });
                  }}
                />
              </div>
            );
          })}

          {/* </Draggable> */}

          <div className="p-5  grid grid-cols-2 itemcount">
            <p>
              {tasks.length} item{tasks.length > 1 ? "s" : ""} left
            </p>

            <button
              className="text-end"
              onClick={() => {
                dispatch({
                  type: Action.REMOVE_CTASK,
                });
              }}
            >
              Clear Completed
            </button>
          </div>
        </div>

        <div className="p-4 liststatus text-center item grid grid-cols-3">
          <button className=" active filter" onClick={() => toggleFilter("all")}>
            All
          </button>
          <button className=" filter" onClick={() => toggleFilter("active")}>
            Active
          </button>
          <button className=" filter" onClick={() => toggleFilter("completed")}>
            Completed{" "}
          </button>
        </div>
        {/* <p className="text-center p-5 dragtext" >Drag and drop to reorder list</p> */}
      </div>
    </div>
  );
};

export default ToDoList;
