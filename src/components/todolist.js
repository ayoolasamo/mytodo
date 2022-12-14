import React from "react";
import { tododata } from "../tododata";
import Listitem from "./listItem";
import TodoStatus from "./todoStatus";
const Todolist = () => {
    return (
        <div className="grid md:w-1/2 lg:w-1/3 m-auto">
            <div className="py-2 px-6  listbody md:px-0 ">
                <div className="item itembody">
                    {
                        tododata.map((data) => {
                            return (
                                <Listitem
                                    item={data.item}
                                />
                            )
                        })

                    }
                    <div className="p-5  grid grid-cols-2 itemcount" >
                        <p>5 items left </p>
                        <p className="text-end">Clear Completed </p>
                    </div>
                </div>
                <TodoStatus />
                <p className="text-center p-5 dragtext" >Drag and drop to reorder list</p>
            </div>

        </div>
    )
}

export default Todolist;