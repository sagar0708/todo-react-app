import './App.css';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';
import React, { useState } from 'react'


function App() {
  let onDelete = (todo) =>{
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  }
  let addTodo = (title, desc) =>{
    let id = todos.length + 1;
    let newTodo = {
      id: id,
      title: title,
      desc: desc
    }
    setTodos([...todos, newTodo])
  }
  const [todos, setTodos] = useState([
    {
      id:1,
      title:"First Item",
      desc:"This is the first item of list."
    },
    {
      id:2,
      title:"Second Item",
      desc:"This is the second item of list."
    }
  ])
  return (
    <div className="App">
      <h1>todo app made with ReactJS</h1>
      <div className="addtodo-box">
        <AddTodo addTodo={addTodo}/>
      </div>
      <div className="todo-list-box">
        <Todo todoList={todos} onDelete={onDelete}/>
      </div>
    </div>
  );
}

export default App;
