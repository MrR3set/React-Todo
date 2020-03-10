import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm";
import "./App.css"

// const todoList = [
//     {
//       task: 'Organize Garage',
//       id: 1528817077286,
//       completed: false
//     },
//     {
//       task: 'Bake Cookies',
//       id: 1528817084358,
//       completed: false
//     }
// ];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor (){
    super();
    this.state={
      todoList:JSON.parse(localStorage.getItem("saveddata")),
    }
  }
  toggleCompleted = clickedTaskID => {
    this.setState({
      todoList:this.state.todoList.map(task=>{
        if(task.id===clickedTaskID){
          return{...task,completed:!task.completed}
        }else{
          return task;
        }
      })
    })
  }

  clearCompleted = () =>{
    this.setState({
      todoList: this.state.todoList.filter(task=>
        // if(task.completed === true)
        //   return null
        // else
        //   return task
        task.completed === false 
      )
    })
}

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id : Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList,newTask]
    })
  }

  render() {
    console.log( "saved data is ", JSON.parse(localStorage.getItem("saveddata")));
    localStorage.setItem("saveddata", JSON.stringify(this.state.todoList));
    return (
      <div className="app-wrapper">
          <div className="form-wrapper">
            <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
          </div>
          <div className="todoList-wrapper">
            <TodoList 
            tasks={this.state.todoList} 
            toggleCompleted={this.toggleCompleted} ></TodoList>
            <button onClick={this.clearCompleted}>Clear Completed</button>
          </div>
          
      </div>
    );
  }
}

export default App;
