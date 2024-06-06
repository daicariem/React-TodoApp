import React, { useState } from "react";
import "./todolist.css";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editText,setEditText] = useState('')
  const [editIndex,setEditIndex] = useState('')
  const [allCompleted, setAllCompleted] = useState(false);


  function handleAddTask(e) {
    setInputText(e.target.value);
  }

  function handleSubmitAddTask() {
    if (inputText.trim()) {
      setTasks([...tasks, { id:tasks.length+1 , text: inputText, completed: false }]);
      setInputText('');
    }
  }

  function HandleDelete (id) {
    setTasks(tasks.filter((task, i) => task.id !== id));
  }

  function HandleEdit(id) {
      setEditIndex(id)
      setEditText(tasks[id].text)
  }

  function HandleEditSubmit () {
    const updateTask =  [...tasks]
    updateTask[editIndex].text = editText;
    setTasks(updateTask);
    setEditIndex(null);
    setEditText('')
  }

  function handleDeleteAll() {
    setTasks([]);
  }

  function handleCheckAll() {
    const updatedTasks = tasks.map(task => ({ ...task, completed: !allCompleted }));
    setTasks(updatedTasks);
    setAllCompleted(!allCompleted)
  }

  function handleChangeonCheck(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks)
  }

  

  return (
    <div className="container">
      <h1>Todo-List-App</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add Task"
          value={inputText}
          onChange={handleAddTask}
        />
        <button onClick={handleSubmitAddTask}>SUBMIT</button>
      </div>
      {tasks.map((task,index) => (
        <div className="task" key={index}>
            {editIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={HandleEditSubmit}>Save</button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <input type="checkbox" checked={task.completed} onChange={() =>handleChangeonCheck(index)} />
              <button className="edit" onClick={() => HandleEdit(index)} >✏️</button>
              <button className="delete"onClick={() => HandleDelete(task.id)} >🗑️</button>
            </>
          )}
        </div>
      ))}
      <div className="actions">
        <button className="check-all" onClick={handleCheckAll} >Check All</button>
        <button className="delete-tasks"  onClick={handleDeleteAll}>Delete Tasks</button>
      </div>
    </div>
  );
}

export default Todolist;
