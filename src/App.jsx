import { useEffect, useState } from "react"
import TodoInput from "./TodoInput"
import TodoList from "./TodoList"

function App() {
  const [input , setInput] = useState('') ; 
  
  let [todos , setTodos] = useState(['go to gym' , 'solve problem' , 'clean room']) 



  const editTodo = (todo) => {
    const newTodoList = todos.filter((todos , todosIndex) => {
      return todos !== todo
    })
    persistData(newTodoList)

    setTodos(newTodoList)
  }

  const deleteTodo = (index) =>{
    const newTodoList = todos.filter((todos,todosIndex) => {
      return todosIndex !== index
       
    })
    setTodos(newTodoList)
    persistData(newTodoList)
  }
  
  const updateTodo = (newTodo) =>{
    const newTodoList = [...todos , newTodo] ;
    setTodos(newTodoList) ;
    persistData(newTodoList)
  }

  function persistData(newList) {
    localStorage.setItem('todo' , JSON.stringify({todo : newList}))
  }

  useEffect( () => {
    if(!localStorage){
      return 
    }

    let localTodos = localStorage.getItem('todo') ;
    if(!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todo
    setTodos(localTodos)


  } ,[])
  

  return (
    <div className="flex items-center justify-center min-h-screen">
   <div className="w-full max-w-md bg-slate-500     p-11 rounded-2xl">
   <TodoInput updateTodo ={updateTodo} input={input} setInput={setInput} />
   <TodoList todo ={todos} deleteTodo ={deleteTodo} editTodo={editTodo} setInput={setInput} />
   </div>
   </div>
  )
}

export default App
