import React from 'react'

function TodoCard(props) {
    const {children, deleteTodo, index , editTodo  ,todo ,setInput} = props
    
  return (
    <div className=' w-[31rem] flex '>
        <div className='w-[65%] font-bold font-mono'>
        {children}
        </div>
        <div className='ml-1  flex items-center justify-around  '>
        <button  className='transform transition duration-300 hover:scale-125 mr-2'><i class="fa-solid fa-pen-to-square" onClick={() => {
            editTodo(todo) ;
            setInput(todo) ;
            
            
        }}></i></button>
        <button className='transform transition duration-500 hover:scale-125' onClick={() => {
            deleteTodo(index) ;
        }}><i class="fa-solid fa-trash"></i>
        </button>
        
        
        </div>
        


    </div>
  )
}

export default TodoCard