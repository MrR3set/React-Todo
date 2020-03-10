import React from 'react';
import "./Todo.css"

const Task = props => {
  return (
    <div className={`task${props.task.completed? ' completed' : ''}`} 
    onClick={() => props.toggleCompleted(props.task.id) }>
        <p>{props.task.task}</p>
    </div>
  )
}

export default Task;