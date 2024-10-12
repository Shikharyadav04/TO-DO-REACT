import React, { useState } from 'react'

function TodoInput(props) {
    const {updateTodo , input , setInput} = props ;
   
  return (
    <div className='max-w-fit max-h-fit flex justify-center items-center mb-8'>
    <input type="text" placeholder='Enter the task....' className='font-mono outline-none ml-1 rounded-sm w-[25rem] ' value={input} onChange={(e) => {
        setInput(e.target.value)
    }}/>
    <button className='bg-slate-900 text-white font-serif rounded-md w-[3rem] transform transition duration-300 hover:scale-110 ml-1' onClick={() => {
        updateTodo(input) ;
        setInput('')
    }}>Add</button>
    </div>
  )
}

export default TodoInput