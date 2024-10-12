import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
    const {todo , deleteTodo ,editTodo,setInput} = props
    
    return (
    
        <ul className='w-56'>
            {todo.map( (todo,index) => (
               
            <TodoCard key={index} {...props} index ={index} todo={todo}  setInput={setInput} >
                <p>{todo}</p>
            </TodoCard> 
            ))}
        </ul>
        
  )
}

export default TodoList