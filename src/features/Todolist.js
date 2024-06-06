import React, { useEffect, useState } from "react";
import "./todolist.css";

function Todolist() {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editText,setEditText] = useState('')
  const [editIndex,setEditIndex] = useState(null)
  const [allCompleted, setAllCompleted] = useState(false);


  useEffect(() => {
    const tasksFromLS = localStorage.getItem('tasks')

    if(!tasksFromLS) {
      return localStorage.setItem('tasks', JSON.stringify([]));
    }
  
    setTasks(JSON.parse(tasksFromLS))
    // return localStorage.setItem('tasks', JSON.stringify(tasks))
  }, []);



  function handleAddTask(e) {
    setInputText(e.target.value);
  }

  function handleSubmitAddTask() {
    if (inputText.trim()) {
      const taskList = [...tasks, { id:tasks.length+1 , text: inputText, completed: false }]
      localStorage.setItem('tasks', JSON.stringify(taskList))
      setTasks(taskList);
      setInputText('');
    }
  }

  function HandleDelete (id) {
   const a = tasks.filter((task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(a))
    setTasks(a);
  }

  function HandleEdit(id) {
      setEditIndex(id)
      setEditText(tasks[id].text)
  }

  function HandleEditSubmit () {
    const updateTask =  [...tasks]
    updateTask[editIndex].text = editText;
    localStorage.setItem('tasks', JSON.stringify(updateTask));
    setTasks(updateTask);
    setEditIndex(null);
    setEditText('')
  }

  function handleDeleteAll() {
    setTasks([]);
  }

  function handleCheckAll() {
    const updatedTasks = tasks.map(task => ({ ...task, completed: !allCompleted }));
    localStorage.setItem('tasks',JSON.stringify(updatedTasks))
    setTasks(updatedTasks);
    setAllCompleted(!allCompleted)
  }

  function handleChangeonCheck(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    localStorage.setItem('tasks',JSON.stringify(updatedTasks))
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
      {tasks?.map((task,index) => (
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