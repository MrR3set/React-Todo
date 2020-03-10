import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          task: ''
        };
      }
    
      handleChanges = e => {
        // update state with each keystroke
        this.setState({
          task: e.target.value
        });
      };
    
      // class property to submit form
      handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
          task: ''
        });
      };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        placeholder="Add task"
        type="text"
        name="task"
        value={this.state.task}
        onChange={this.handleChanges}
        required
        minlength="2"
        />
        <button>Add</button>        
      </form>
  
    );
  }
}

export default TodoForm;
          /* <button className="clear-btn" onClick={this.props.clearCompleted}>Clear completed</button> */
