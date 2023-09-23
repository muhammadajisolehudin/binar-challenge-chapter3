import React, { useState, State } from 'react'
import { useNavigate } from 'react-router-dom'

export const AddList = (props) => {
    
    // const dataObjek = props.location.Data;
    // const navigate = useNavigate();
    let tes="aku"

    let [InputData, setInputData] = useState("")

    function generateRandomId() {
        return Math.floor(Math.random() * 1) + 1;
    }

    // const Submit=()=>{
    //     const dataBaru = InputData
    //     let dataAwal=D

    //     dataAwal.push({
    //         "id": generateRandomId(),
    //         "task": data,
    //         "complete": false
    //     })
    // }
    // console.log(tes)
    
  return (
    <div>
        <h1 className=' mt-6 text-2xl font-bold justify-center flex'>TodoSearch</h1>
        <div className='m-3 mx-60'>
            <div className='p-3 border-red-500 border-2 rounded-md'>
                <input value={InputData} onChange={(e)=>{setInputData(e.target.value)}} className="w-[100%] h-[2.8rem] rounded mt-2 mb-4 border-2" type='text'/>
                {/* <button  className='w-[100%] bg-red-500 h-[2.8rem] rounded' onClick={()=>{Submit()}} type='submit'>submit</button>  */}
            </div>
            
        </div>
    </div>
  )
}
