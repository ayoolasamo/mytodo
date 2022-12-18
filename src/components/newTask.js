import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/taskcontext';
import { Action } from '../reducers/taskReducer';
import uuid from 'uuid/v1';


const NewTask = () => {
    const { dispatch } = useContext(TaskContext);
    const [description, setDescription] = useState('');
    const onAddTask = (e) => {

        e.preventDefault();

        dispatch({
            type: Action.ADD_TASK,
            task: {
                id:uuid(),
                isChecked:false,
                created:new Date(),
                description:description
            }
        });
        setDescription('')
    }
    return (

        <form className="item  p-4 " onSubmit={onAddTask}>
            {/* <input type="checkbox"name="status" className="rounded-full mx-2" /> */}
            <input   label="Add Task"
                    variant="outlined"
                    size="small"
                    value={description}
                    onChange={
                        (e) => {
                            setDescription(e.target.value)
                        }
                    }placeholder="Create a new todo..."
                 
            >
            </input>

        </form>
    )
}
export default NewTask;