import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const TaskList=({task, setTask,setActivity,setUpdate,setEdit})=>{

    const handleRemove=(id)=>{
     const filterItem= task.filter((item)=>
          id!=item.id
        )

        setTask(filterItem)
    }

        const handleEdit=(id)=>{
            const findItem = task.find((elem)=>{
                return id===elem.id
            })

           setActivity(findItem.title);
           setUpdate(false)
           setEdit(id)
        }

        const handleAllRemove=()=>{
            setTask([])
        }
       
    return(
        <div>
            <ul>
                {
                    task.map((taskList)=>(
                        <li className=" flex justify-between border-b-2 px-2 py-1 items-center " key={taskList.id}>
                        <div className=" flex gap-3">
                            <span>{taskList.title}</span>
                        </div>
                        <div className=" flex gap-3">
                            <span className=" cursor-pointer">
                            <FaEdit size={25} onClick={()=>handleEdit(taskList.id)} />
                            </span>
                            <span className=" cursor-pointer" onClick={()=>handleRemove(taskList.id)}>
                            <MdDelete size={25}/>
                            </span>
                        </div>
                    </li>
    
                    ))
                }

            </ul>
            {
                task.length>=1&& <button className="bg-[red] text-white px-3 py-2 rounded-md my-5 hover:bg-red-400" onClick={ handleAllRemove}>Remove all</button>
            }
           
        </div>
    )
}

export default TaskList;