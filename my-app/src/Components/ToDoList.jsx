import React, { useState } from "react";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from 'uuid';
const ToDoList=()=>{

    const [activity, setActivity]= useState("")

    const [task, setTask] = useState([])

   const [update, setUpdate]= useState(true)
   const [edit,setEdit]=useState(null)

    const handlechange =(e)=>{
            console.log(e.target.value);
            setActivity(e.target.value)

    }

    const handleUpdate=(e)=>{
        if(activity===""){
            alert("Plese fill input box")
        }


       else if(!update){
            setTask(task.map((newElem)=>{
                    if(newElem.id ===edit ){
                        return{...newElem, title:activity}
                    }
                    return newElem;
            }))
            setUpdate(true)
            setActivity("")
            setEdit(null)
               
        }else{
            const allActivtity = {id:uuidv4(), title:activity}
        setTask([...task, allActivtity])
        setActivity("")

        }


        
    }

    return(
        <div>
            <section className=" text-gray-600 body-font overflow-hidden">
                <div className=" container px-5 py-24 mx-auto">
                    <div className=" w-[80%] mx-auto flex flex-wrap">
                        <div className=" lg:w-1/2">
                            <img src="https://img.freepik.com/free-vector/flat-design-office-printer-illustration_23-2150268487.jpg?t=st=1710947601~exp=1710951201~hmac=43daa341391552702d5b9e0e0b29345aa684289d0c2a22ff6405dd2a4f9f2322&w=740" alt="ecommerce" className=" w-full lg:h-auto h-64 object-cover object-center rounded" />
                        </div>
                        <div className=" lg:w-[40%] md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                            <h2 className=" text-gray-900 font-bold mb-5 text-center text-5xl">Todo</h2>
                            <div className=" mb-4">
                                <input type="text"  className=" w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={activity} onChange={handlechange}/>
                            </div>
                            {
                                update? <button className=" text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleUpdate}>Add</button>:<button
                                 className=" text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleUpdate}>Update</button>


                            }

                            {/* {
                                task.map((taskList)=>(
                                        <div>
                                            <ul>
                                                <li>{taskList}</li>
                                            </ul>
                                        </div>
                                ))
                            } */}
                            <TaskList task={task} setTask={setTask} setActivity={setActivity} setUpdate={setUpdate} setEdit={setEdit}/>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default ToDoList