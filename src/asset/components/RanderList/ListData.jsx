import React, { useState } from "react";

export const ListData = (props) => {
  const [check, setCheck] = useState(props.data.complete)
  let [Data, setData] = useState(props.data)
  let [task, setTask]= useState(props.data.task) 
  let [edit, setEdit] = useState(true)
  let [Delete, setDelete] =useState(props.deleteTask)

  const handleCheckboxChange = () => {
    setCheck(!check);
  }


  // const deleteTask = () => {
  //   // Data.functionDeleteTask()
  //   const hasil = Data.filter((value) => (value.task !== task));
  //   {console.log(hasil+"ini data")}
  // };
  

  return (
    <div className="px-4 py-2 flex justify-between gap-4 items-center bg-yellow-500 rounded w-full">
      <div>

        <p className={`${check ? "line-through" : ""}`}>
            {edit?<span>{task}</span>:<input value={task} onChange={(e)=>{setTask(e.target.value)}} className="w-[25rem] h-[2rem]"/>}
            
        </p>
        {console.log(check)}
      </div>
      <div className="flex w-[12%] bg-green-500 justify-between">
        <input checked={check} onChange={handleCheckboxChange} type="checkbox" />
        <button onClick={()=>{setEdit(!edit)}}>edit</button>
        <button onClick={() => props.deleteTask(props.data.id)}>hapus</button>
      </div>
    </div>
  );
};