import React, { useState } from 'react'

import { ListData } from "../asset/components/RanderList/ListData";

export const HomePage = () => {

  
  // let [DataAwal, setDataAwal] = useState([])


const [showAll, setShowAll] = useState(true);
const [showDone, setShowDone] = useState(false);
const [showTodo, setShowTodo] = useState(false);
  
  let [InputData, setInputData] = useState("")

  let [DataSearch, setDataSearch] = useState("") 

 const [Data, setData] = useState (
  [
    {
      "id": 1,
      "task": "Nyuci mobil",
      "complete": false
    }, 
    {
      "id": 2,
      "task": "Memberi makan kucing",
      "complete": true
    }, 
    {
      "id": 3,
      "task": "Olahraga 10 menit",
      "complete": false
    }, 
    {
      "id": 4,
      "task": "Sarapan sereal",
      "complete": false
    }, 
    {
      "id": 5,
      "task": "Belanja harian",
      "complete": false
    }, 
    {
      "id": 6,
      "task": "Ngeprint tugas",
      "complete": false
    }, 
    {
      "id": 7,
      "task": "Bayar tagihan bulanan",
      "complete": false
    }, 
    {
      "id": 8,
      "task": "Berangkat kuliah",
      "complete": false
    }, 
    {
      "id": 9,
      "task": "Les bahasa Inggris",
      "complete": false
    }, 
    {
      "id": 10,
      "task": "Ke rumah Sabrina",
      "complete": false
    }
  ]
 )


 


 function generateRandomId(min, max) {
  return  Math.floor(Math.random() * (max - min + 1)) + min;
        
    }

 const Submit=()=>{
        const dataBaru = InputData
        let dataAwal=Data

        dataAwal.push({
            "id": generateRandomId(11, 100),
            "task": dataBaru,
            "complete": false
        })

        setData(dataAwal)
    }

  const handleDelete = (task) => {
    
    const updatedData = Data.filter((value) => value.task !== task);
    setData(updatedData);
  };

  const handleTask = (complete) => {
    setData(complete);
  };

  const handleFilter=(e)=>{
    setData(Data.filter((value) => value.task.includes(DataSearch)))
  }
  const handleDeleteAll = ()=>{
    setData([]);
  }
  const handleDeleteDoneTask = () => {
    const updatedData = Data.filter((value) => !value.complete);
    setData(updatedData);
  }
 

  return (

   
    <div>
        
        <h1 className=' mt-6 text-2xl font-bold justify-center flex'>TodoSearch</h1>
        <div className='m-3 mx-60'>
          <div className='p-3 flex border-red-500 border-2 rounded-md'> 
            <div className='m-4 w-[55%]  '> 
              
              <div className='flex w-[auto] h-[2.5rem] mb-5 bg-red-500 rounded-md'>
                <div className='bg-red-500 w-[10%] h-[100%] rounded-l  justify-center items-center flex'>S</div><input onChange={(e)=>{setDataSearch(e.target.value)}} placeholder=' cari task disini' className='w-[90%] h-[100%] rounded-r border' type="text" />
              </div>
              <button onClick={()=>{handleFilter()}} className='bg-red-500 h-[2.8rem] w-[100%] rounded'>Search</button>

            </div>
            <div className='w-[45%] m-4'>
                <input onChange={(e)=>{setInputData(e.target.value)}} placeholder=' masukan task baru disini' className="w-[100%] h-[2.5rem] rounded mb-5 border" type='text'/>
                <button className='bg-red-500 h-[2.8rem] w-[100%] rounded' onClick={(setInputData)=>setInputData !== '' ? Submit(): undefined } type='submit'>Add New Task</button>
               {/* <Link to={{ pathname: '/Add', state: {  dataObjek:Data }}}><button className='bg-red-500 h-[2.8rem] w-[60%] rounded'>Add New Task</button></Link> */}
            </div> 
            {console.log(Data)}
          </div>

          <h1 className=' text-2xl justify-center m-2 font-semibold flex'>TodoLIst</h1>
          <div className='flex justify-between'>
            <button onClick={() => {setShowAll(true);setShowDone(false);setShowTodo(false);}} className='bg-red-500 h-[2.8rem] w-[16.6rem] rounded'>All</button>
            <button onClick={() => {setShowAll(false);setShowDone(true);setShowTodo(false);}} className='bg-red-500 h-[2.8rem] w-[16.6rem] rounded'>Done</button>
            <button onClick={() => {setShowAll(false);setShowDone(false);setShowTodo(true);}} className='bg-red-500 h-[2.8rem] w-[16.6rem] rounded'>Todo</button>
          </div>

          <div className="flex flex-col mt-10 bg-white gap-4 rounded">
            {/* {Data.map((data, index) => (
              <ListData key={index} data={data} setData={setData} deleteTask={handleDelete} />
              
            ))} */}

          {showAll
            ? Data.map((data, index) => (
                <ListData key={index} data={data} setData={setData} deleteTask={handleDelete} checkTask={handleTask}/>
              ))
          : showDone
          ? Data.filter((data) => data.complete).map((data) => (
              <ListData data={data} setData={setData} deleteTask={handleDelete} checkTask={handleTask} />
            ))
          : showTodo
          ? Data.filter((data) => !data.complete).map((data) => (
              <ListData data={data} setData={setData} deleteTask={handleDelete} checkTask={handleTask}/>
            ))
          : null}

           
          </div>
          <div className='flex justify-between mt-8'>
            <button onClick={()=>{handleDeleteDoneTask()}} className='bg-red-500 h-[2.8rem] w-[48%] rounded'>Delete done task</button>
            <button onClick={()=>{handleDeleteAll()}} className='bg-red-500 h-[2.8rem] w-[48%] rounded'>Delete all task</button>
          </div>
        </div>

        <h1 className='flex justify-center text-3xl text-bold my-4'> masih banyak yang nyantol, masih bingung capt cara handle nyantolnya gimana??</h1>
    </div>
  )
}
