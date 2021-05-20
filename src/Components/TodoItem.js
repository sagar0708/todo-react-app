const TodoItem = ({todo, onDelete}) => {
  return(
    <>
      <h2 className="todo-title">{todo.title}</h2> 
      <p className="todo-desc">{todo.desc}</p>
      <button onClick={()=>{onDelete(todo) }} className="delet-btn"> Delete Me</button>
    </>
  )
}
export default TodoItem;