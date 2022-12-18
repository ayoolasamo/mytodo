import React from "react";

const Listitem = ({ item, status, click,remove }) => {
    return (
        <div >
            <div className="p-4  grid grid-cols-3 " >
                <div className="col-span-2"onClick={click} >
                    {status
                        ?
                        <svg className="rounded-full mx-2" style={{ backgroundImage: "linear-gradient(45deg, hsl(192, 100%, 67%) , hsl(280, 87%, 65%))", padding: "5px", display: "inline" }} xmlns="http://www.w3.org/2000/svg" width="21" height="21">
                            <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
                        </svg>
                        :
                        <input type="checkbox" className={status ? "hidden" : "rounded-full mx-2"} />}

                    <span className={status ? "line-through" : ""} >{item}
                    </span>

                </div>
                <div className="grid place-items-end" onClick={remove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Listitem;