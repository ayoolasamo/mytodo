import React, { useContext } from 'react';
import Listitem from "./listItem";
import { useState } from 'react';
import { useEffect } from 'react';
// import { Draggable } from "react-drag-reorder";

import { TaskContext } from '../contexts/taskcontext';
import { Action } from '../reducers/taskReducer';


const Todolist = () => {
    const {
        tasks,
        dispatch,
        filteractive, filtercompleted

    } = useContext(TaskContext)
    const [filter, setFilter] = useState(tasks);

    const toggleFilter = (fileterStatus) => {
        if (fileterStatus === "active") {
            setFilter(filteractive)
        }
        if (fileterStatus === "all") {
            setFilter(tasks)
        }
        if (fileterStatus === "completed") {
            setFilter(filtercompleted)
        }
    }

    useEffect(() => {
        setFilter(tasks)

    }, [tasks])

    const onChecked = (id, isChecked) => {
        dispatch({
            type: Action.CHECK_TASK,
            task: {
                id,
                isChecked
            }
        })
    }
    //for the filter buttons
    var btns = document.getElementsByClassName("filter");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
    return (
        
        <div className="grid md:w-1/2 lg:w-1/3 m-auto">
            <div className="py-2 px-6  listbody md:px-0 ">
                

                <div className="item itembody">
    
                    {/* <Draggable> */}
                      
                        {
                            filter.map((task) => {
                                return (
                                    <div>
                                   
                                    <Listitem
                                        item={task.description}
                                        status={task.isChecked}
                                        click={() => {
                                            onChecked(task.id, !task.isChecked)
                                        }}
                                        remove={() => {
                                            dispatch({
                                                type: Action.REMOVE_TASK,
                                                id: task.id
                                            })
                                        }}
                                        />
                                     
                                    </div>

                                )
                            })

                        }
                        
                      
                        {/* </Draggable> */}
                   
                  
                    <div className="p-5  grid grid-cols-2 itemcount" >
                        <p className='ayo'>{tasks.length} item{tasks.length > 1 ? "s" : ""} left </p>
                        
                        <button className="text-end" onClick={() => {
                            dispatch({
                                type: Action.REMOVE_CTASK,
                            })
                        }}>Clear Completed </button>
                    </div>
                </div>
                
                <div className="p-4 liststatus text-center item grid grid-cols-3" >
                    <button className=' active filter' onClick={() => toggleFilter("all")}>All</button>
                    <button className=' filter' onClick={() => toggleFilter("active")}>Active</button>
                    < button className=' filter' onClick={() => toggleFilter("completed")} >Completed </button>       
                </div>
                {/* <p className="text-center p-5 dragtext" >Drag and drop to reorder list</p> */}
            </div>

        </div>
    )
}



export default Todolist;