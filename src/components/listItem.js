import React from "react";

const Listitem = ({ item, status }) => {
    return (
        <div>
            <div className="p-4  grid grid-cols-2">
                <div>

                <input type="checkbox" className="rounded-full mx-2" />
                <span className="" >{item}
                </span>
                </div>
                <div className="grid place-items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Listitem;