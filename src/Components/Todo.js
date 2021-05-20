import TodoItem from './TodoItem';
const Todo = (props) => {
  return(
    <div className="todo-box">
      {props.todoList.length === 0 ? <p className="empty-todo-text">No Any todo work here !<br />Please add some todo in the list !</p>:
        props.todoList.map((todo)=>{
          return <TodoItem todo={todo} onDelete={props.onDelete} key={todo.id}/>
        })
      }
    </div>
  )
}
export default Todo;