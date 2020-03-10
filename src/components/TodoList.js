// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from "./Todo";

class TodoList extends React.Component {

  render() {
    return (
      <div className="todolist">   
          {this.props.tasks.map(Task=>(
            <Todo task={Task} toggleCompleted={this.props.toggleCompleted}/>
          ))}
      </div>
    );
  }
}

export default TodoList;
