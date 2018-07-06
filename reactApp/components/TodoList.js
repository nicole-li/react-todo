import React from 'react';
import Todo from './Todo.js';

class TodoList extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) =>
          <Todo xClick={() => this.props.todoXClick(this.props.todos.indexOf(todo))} task={todo.taskText} completed={todo.completed}/>
        )}
      </ul>
    )
  }
}

export default TodoList;
