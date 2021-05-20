import React, { useState } from 'react'

const AddTodo = (props) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!title || !desc){
      alert("Title and Description must be not Empty...!");
    }
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
  }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return(
    <>
      <form onSubmit={handleSubmit} className="addTodo-Form">
        <label className="input-label">Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="add-input"/><br/>
        <label className="input-label">Description:</label>
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)}  className="add-input"/>
        <input type="submit" value="Add Todo" className="submit-btn add-input" />
      </form>
    </>
  )
}
export default AddTodo;